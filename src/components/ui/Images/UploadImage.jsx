import { useState } from "react";
import { message, Upload } from "antd";
import ImgCrop from "antd-img-crop";

import {
  StyledUploadButton,
  StyledUploadButtonText,
  StyledUploadImage,
} from "./index.styled";

import { getBase64 } from "@/helpers";
import { IconTypeEnum, IconTypeIconsMap } from "@/lib";
import { AppIcon } from "@/components/shared";

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    return message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 4;
  if (!isLt2M) {
    return message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const UploadImage = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <StyledUploadButton type="button">
      <AppIcon
        Icon={IconTypeIconsMap[IconTypeEnum.Image]}
        size={28}
        color="#195038"
      />
      <StyledUploadButtonText
        strong
        type="secondary"
      >{`Photo ${Number(fileList?.length) + 1}`}</StyledUploadButtonText>
    </StyledUploadButton>
  );

  return (
    <>
      <ImgCrop rotationSlider>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          accept={".jpg, .png, .jpeg"}
          listType="picture-card"
          fileList={fileList}
          //   multiple={true}
          pastable={true}
          beforeUpload={beforeUpload}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 5 ? null : uploadButton}
        </Upload>
      </ImgCrop>
      {previewImage && (
        <StyledUploadImage
          styles={{ root: { display: "none" } }}
          preview={{
            open: previewOpen,
            onOpenChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default UploadImage;
