import { LifePage } from "../../components/LifePage";
import { motorcycleItems } from "../../data/life";
export default function Page() {
  return <LifePage kind="motorcycle" kicker="MOTORCYCLE" title="摩托车" description="在路上，与风同行。" items={motorcycleItems} />;
}
