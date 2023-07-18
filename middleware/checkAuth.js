export default function ({ redirect }) {
  // if (!localStorage.getItem("UserToken")) return redirect("/login");
  if (!localStorage.getItem("UserToken"))
    return redirect("/login", { replace: true });
}
