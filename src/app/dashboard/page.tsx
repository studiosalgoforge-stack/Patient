import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) redirect("/login");

  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome Dr. {session.user?.name}</h1>
    </div>
  );
}
