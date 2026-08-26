import { LifePage } from "../../components/LifePage";
import { friendsItems } from "../../data/life";
export default function Page() {
  return <LifePage kind="friends" kicker="FRIENDS" title="挚友" description="一路同行的人。" items={friendsItems} />;
}
