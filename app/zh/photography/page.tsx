import { LifePage } from "../../components/LifePage";
import { photographyItems } from "../../data/life";
export default function Page() {
  return <LifePage kind="photography" title="摄影" items={photographyItems} mode="gallery" />;
}
