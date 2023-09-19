import {
  VerticalInfo,
  VerticalInfoDesc,
  VerticalInfoTitle,
} from "../styles/coinInfoRow";

function VerticalInfoBox({
  title,
  desc,
}: {
  title: string;
  desc: number | null;
}) {
  return (
    <VerticalInfo>
      <VerticalInfoTitle>{title}</VerticalInfoTitle>
      <VerticalInfoDesc>{desc?.toLocaleString()}</VerticalInfoDesc>
    </VerticalInfo>
  );
}

export default VerticalInfoBox;
