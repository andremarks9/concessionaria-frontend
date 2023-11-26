import { useRouter } from "next/navigation";

export default function Header({ rightButtonText, setRightButtonText }: any) {
  const router = useRouter();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
    } else {
      router.push("login");
    }
  };
  return (
    <div className="flex flex-row justify-between h-24">
      <div className="flex items-center grow justify-center">
        <h1>Concessionaria</h1>
      </div>
      <div className="flex items-center grow justify-center">
        <button className="" onClick={rightButtonAction}>
          {rightButtonText}
        </button>
      </div>
    </div>
  );
}
