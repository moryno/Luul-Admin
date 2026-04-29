import { Image, Tag, Tooltip } from "antd";
import {
  StyledProductColTitle,
  StyledProductColTitleWrapper,
  StyledProductColumn,
  StyledAvailabilityStatus,
} from "./index.styled";
import TestImg from "@assets/images/ipod.png";

export const productColumns = [
  {
    title: "Product",
    dataIndex: "name",
    key: "name",
    render: (text, record) => {
      return (
        <StyledProductColumn gap="small">
          <Image
            alt={`This is image for ${text}`}
            height={42}
            width={42}
            preview={false}
            src={TestImg}
          />
          <StyledProductColTitleWrapper vertical>
            <span>021231</span>
            <StyledProductColTitle>{text}</StyledProductColTitle>
          </StyledProductColTitleWrapper>
        </StyledProductColumn>
      );
    },
    width: 200,
    ellipsis: true,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: 200,
    ellipsis: {
      showTitle: false,
    },
    render: (description) => (
      <Tooltip placement="topLeft" title={description}>
        {description}
      </Tooltip>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    width: 100,
  },
  {
    title: "Size",
    dataIndex: "variants",
    key: "size",
    width: 80,
    render: (variants) => <span>{variants?.[0]?.size ?? "-"}</span>,
  },
  {
    title: "QTY",
    dataIndex: "variants",
    key: "stockQuantity",
    width: 80,
    render: (variants) => <span>{variants?.[0]?.stockQuantity ?? 0}</span>,
  },
  {
    title: "Status",
    dataIndex: "variants",
    key: "status",
    width: 100,
    align: "center",
    render: (variants) => {
      let qty = variants?.[0]?.stockQuantity;
      let color = qty > 0 ? "green" : "red";
      let tagText = qty > 0 ? "Available" : "Out of Stock";

      return (
        <StyledAvailabilityStatus color={color}>
          {tagText}
        </StyledAvailabilityStatus>
      );
    },
  },
];
