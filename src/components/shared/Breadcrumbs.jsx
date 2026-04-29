import { useMemo } from "react";
import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";
import { decodeParams } from "@/helpers";
import styled from "styled-components";
import ArrowRightIcon from "@/assets/images/icons/arrow-right.svg?react";
import { AppIcon } from ".";

const Breadcrumbs = ({ urlToNameMap, items = null }) => {
  const { pathname } = useLocation();
  const decodedPathName = decodeParams(pathname);

  const breadCrumbItems = useMemo(() => {
    if (items)
      return items.map((item) => ({
        key: item,
        title: item,
      }));

    const pathSnippets = decodedPathName.split("/").filter((i) => i);
    let extraBreadcrumbItems = [];
    pathSnippets.forEach((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      if (urlToNameMap[url]) {
        extraBreadcrumbItems.push({
          key: url,
          title: (
            <Link
              to={url}
              style={{ color: url === decodedPathName ? "#7C858E" : "" }}
            >
              {urlToNameMap[url]}
            </Link>
          ),
        });
      }
    });

    return extraBreadcrumbItems;
  }, [items, decodedPathName, urlToNameMap]);

  return (
    <StyledAppBreadcrumbsContainer>
      <Breadcrumb
        separator={<AppIcon Icon={ArrowRightIcon} size={14} iconType="fill" />}
        items={breadCrumbItems}
      />
    </StyledAppBreadcrumbsContainer>
  );
};
const StyledAppBreadcrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .ant-breadcrumb {
    width: 100%;

    ol {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
    }
  }
  .ant-breadcrumb li:last-child a {
    font-weight: 500;
    color: ${({ theme }) => theme.palette.primary.main} !important;
    cursor: default;
    pointer-events: none;
  }
`;
export default Breadcrumbs;
