import { Logo } from "./Logo";
import { Menu } from "./Menu";

import { RedesSociales } from "./RedesSociales";

export const BarraLateral = () => {
  return (
    <section className="aside d-flex flex-column align-items-center gap-1">
      <Logo />
   <Menu/>
      <RedesSociales />
    </section>
  );
};
