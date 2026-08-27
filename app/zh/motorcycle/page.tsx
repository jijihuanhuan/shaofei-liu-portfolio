import { LifePage } from "../../components/LifePage";
import { motorcycleItems } from "../../data/life";
export default function Page() {
  return <LifePage kind="motorcycle" title="摩托车" items={motorcycleItems} />;
}
