import { LifePage } from "../../components/LifePage";
import { cookingItems } from "../../data/life";
export default function Page() {
  return <LifePage kind="cooking" title="烹饪" items={cookingItems} />;
}
