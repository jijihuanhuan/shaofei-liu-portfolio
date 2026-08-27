import { LifePage } from "../../components/LifePage";
import { friendsItems } from "../../data/life";
export default function Page() {
  return <LifePage kind="friends" title="挚友" items={friendsItems} />;
}
