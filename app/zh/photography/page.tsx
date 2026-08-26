import { LifePage } from "../../components/LifePage";
import { photographyItems } from "../../data/life";
export default function Page() {
  return <LifePage kind="photography" kicker="PHOTOGRAPHY" title="摄影" description="用镜头记录的光与影。" items={photographyItems} mode="gallery" />;
}
