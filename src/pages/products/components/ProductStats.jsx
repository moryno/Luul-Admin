import {
  AppIcon,
  AppPieChart,
  ContainerButton,
  StyledPrimaryTitle,
} from "@/components";

import { Row, Flex, Image } from "antd";
import {
  StyledCategoryTitle,
  StyledStatText,
  StyledStatTitle,
  StyledSkuText,
  StyledCardSectionWrapper,
  StyledStatCard,
} from "../index.styled";

import RestockIcon from "@assets/images/products/restock.svg?react";
import RefillCycleIcon from "@assets/images/products/refill-cycle.svg?react";
import QuestionIcon from "@assets/images/products/question.svg?react";
import CriticalIcon from "@assets/images/products/critical.svg?react";
import LowIcon from "@assets/images/products/low.svg?react";
import TestImg from "@assets/images/ipod.png";

const ProductStats = () => {
  return (
    <Row gutter={[24, 24]}>
      <StyledCardSectionWrapper
        xxl={12}
        xl={12}
        lg={12}
        md={12}
        sm={24}
        xs={24}
      >
        <StyledStatCard loading={false}>
          <Row gutter={[24, 24]}>
            <StyledCardSectionWrapper
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <Flex vertical gap={16}>
                <StyledStatTitle primaryBg={true}>
                  Stock History
                </StyledStatTitle>
                <StyledPrimaryTitle level={2}>4,563</StyledPrimaryTitle>
                <Flex>
                  <StyledStatText type="success">
                    +12.6%{" "}
                    <StyledStatText type="secondary">
                      from previous stock level
                    </StyledStatText>
                  </StyledStatText>
                </Flex>
                <Flex gap="small">
                  <AppIcon Icon={RestockIcon} />
                  <StyledStatText type="secondary">
                    Last Restocked:{" "}
                    <StyledStatText type="High">12 July 2025</StyledStatText>
                  </StyledStatText>
                </Flex>
                <Flex gap="small">
                  <AppIcon Icon={RefillCycleIcon} />
                  <StyledStatText>
                    Avg. Refill Cycle:{" "}
                    <StyledStatText type="High">15 days</StyledStatText>
                  </StyledStatText>
                </Flex>
              </Flex>
            </StyledCardSectionWrapper>
            <StyledCardSectionWrapper
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="withBorder"
            >
              <Flex vertical>
                <Flex vertical gap="small">
                  <StyledStatTitle primaryBg={true}>
                    Top Categories
                  </StyledStatTitle>
                  <StyledSkuText type="secondary">This Week</StyledSkuText>
                </Flex>

                <AppPieChart isPieChart={false} />
              </Flex>
            </StyledCardSectionWrapper>
          </Row>
        </StyledStatCard>
      </StyledCardSectionWrapper>
      <StyledCardSectionWrapper
        xxl={12}
        xl={12}
        lg={12}
        md={12}
        sm={24}
        xs={24}
      >
        <StyledStatCard loading={false}>
          <Row gutter={[24, 24]}>
            <StyledCardSectionWrapper
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <Flex vertical gap="large">
                <StyledStatTitle primaryBg={true}>
                  Low Stock Alerts
                </StyledStatTitle>
                <Flex>
                  <Image
                    alt="abaya-img"
                    height={74}
                    width={74}
                    preview={false}
                    src={TestImg}
                  />
                  <Flex vertical gap="small">
                    <StyledStatTitle primaryBg={true}>
                      Floral Airpod Case
                    </StyledStatTitle>
                    <StyledSkuText type="secondary">#P-1023</StyledSkuText>
                  </Flex>
                </Flex>
                <Flex vertical gap={16}>
                  <Flex align="center" justify="space-between">
                    <Flex gap="small">
                      <AppIcon Icon={CriticalIcon} color={"#F04438"} />
                      <StyledStatText type="danger">Critical: </StyledStatText>
                    </Flex>
                    <StyledStatText type="High">03 items</StyledStatText>
                  </Flex>
                  <Flex align="center" justify="space-between">
                    <Flex gap="small">
                      <AppIcon Icon={LowIcon} color={"#E98841"} />
                      <StyledStatText type="warning">Low: </StyledStatText>
                    </Flex>
                    <StyledStatText type="High">04 items</StyledStatText>
                  </Flex>
                </Flex>
              </Flex>
            </StyledCardSectionWrapper>
            <StyledCardSectionWrapper
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="withBorder"
            >
              <Flex vertical gap="large">
                <Flex gap="small">
                  <StyledStatTitle>Below Safe Quantity</StyledStatTitle>
                  <AppIcon Icon={QuestionIcon} />
                </Flex>
                <Flex vertical gap="small">
                  <Flex align="center" justify="space-between">
                    <StyledCategoryTitle primary={true}>
                      Abaya
                    </StyledCategoryTitle>
                    <StyledCategoryTitle>05 units</StyledCategoryTitle>
                  </Flex>
                  <Flex align="center" justify="space-between">
                    <StyledCategoryTitle primary={true}>
                      Scarves
                    </StyledCategoryTitle>
                    <StyledCategoryTitle>03 units</StyledCategoryTitle>
                  </Flex>
                  <Flex align="center" justify="space-between">
                    <StyledCategoryTitle primary={true}>
                      Tops
                    </StyledCategoryTitle>
                    <StyledCategoryTitle>07 units</StyledCategoryTitle>
                  </Flex>
                  <Flex align="center" justify="space-between">
                    <StyledCategoryTitle primary={true}>
                      Skirts
                    </StyledCategoryTitle>
                    <StyledCategoryTitle>02 units</StyledCategoryTitle>
                  </Flex>
                </Flex>
                <Flex justify="flex-end">
                  <ContainerButton title="Restock Now" type="primary" />
                </Flex>
              </Flex>
            </StyledCardSectionWrapper>
          </Row>
        </StyledStatCard>
      </StyledCardSectionWrapper>
    </Row>
  );
};

export default ProductStats;
