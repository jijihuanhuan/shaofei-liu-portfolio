import { LifePage } from "../../components/LifePage";
import { cookingItems } from "../../data/life";
export default function Page() {
  return <LifePage kind="cooking" kicker="COOKING" title="烹饪" description="人间烟火，最抚人心。" items={cookingItems} />;
}
