import { Row, Flex, Col } from "antd";
import {
  StyledOverviewStatCard,
  StyledStatCardTitle,
  StyledStatCardWrapper,
  StyledStatCount,
  StyledOverviewStatText,
} from "../index.styled";
import { AppIcon } from "@/components";
import { StyledStatText } from "@/pages/products/index.styled";
import UpIcon from "@assets/images/dashboard/statistic-up.svg?react";

const CardStatsList = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={6}>
        <StyledOverviewStatCard>
          <StyledStatCardWrapper
            $background={true}
            vertical
            justify="space-between"
          >
            <StyledStatCardTitle $background={true}>
              Total Revenue
            </StyledStatCardTitle>
            <Flex align="center" justify="space-between">
              <StyledStatCount level={2} $background={true}>
                4,563
              </StyledStatCount>
              <Flex vertical>
                <Flex gap="small">
                  <AppIcon Icon={UpIcon} color="#09DE13" />
                  <StyledStatText type="success">+12.6%</StyledStatText>
                </Flex>
                <StyledOverviewStatText $background={true}>
                  From last week
                </StyledOverviewStatText>
              </Flex>
            </Flex>
          </StyledStatCardWrapper>
        </StyledOverviewStatCard>
      </Col>
      <Col span={6}>
        <StyledOverviewStatCard>
          <StyledStatCardWrapper vertical justify="space-between">
            <StyledStatCardTitle>Total Revenue</StyledStatCardTitle>
            <Flex align="center" justify="space-between">
              <StyledStatCount level={2}>4,563</StyledStatCount>
              <Flex vertical>
                <Flex gap="small">
                  <AppIcon Icon={UpIcon} color="#09DE13" />
                  <StyledStatText type="success">+12.6%</StyledStatText>
                </Flex>
                <StyledOverviewStatText type="secondary">
                  From last week
                </StyledOverviewStatText>
              </Flex>
            </Flex>
          </StyledStatCardWrapper>
        </StyledOverviewStatCard>
      </Col>
      <Col span={6}>
        <StyledOverviewStatCard>
          <StyledStatCardWrapper vertical justify="space-between">
            <StyledStatCardTitle>Total Revenue</StyledStatCardTitle>
            <Flex align="center" justify="space-between">
              <StyledStatCount level={2}>4,563</StyledStatCount>
              <Flex vertical>
                <Flex gap="small">
                  <AppIcon Icon={UpIcon} color="#09DE13" />
                  <StyledStatText type="success">+12.6%</StyledStatText>
                </Flex>
                <StyledOverviewStatText type="secondary">
                  From last week
                </StyledOverviewStatText>
              </Flex>
            </Flex>
          </StyledStatCardWrapper>
        </StyledOverviewStatCard>
      </Col>
      <Col span={6}>
        <StyledOverviewStatCard>
          <StyledStatCardWrapper vertical justify="space-between">
            <StyledStatCardTitle>Total Revenue</StyledStatCardTitle>
            <Flex align="center" justify="space-between">
              <StyledStatCount level={2}>4,563</StyledStatCount>
              <Flex vertical>
                <Flex gap="small">
                  <AppIcon Icon={UpIcon} color="#09DE13" />
                  <StyledStatText type="success">+12.6%</StyledStatText>
                </Flex>
                <StyledOverviewStatText type="secondary">
                  From last week
                </StyledOverviewStatText>
              </Flex>
            </Flex>
          </StyledStatCardWrapper>
        </StyledOverviewStatCard>
      </Col>
    </Row>
  );
};

export default CardStatsList;
