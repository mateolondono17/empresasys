import { Logo } from "./Logo";
import { Menu } from "./Menu";

import { RedesSociales } from "./RedesSociales";

export const BarraLateral = () => {
  return (
    <section className="container-fluid">
    <section className="row">
    <nav className="sidebar aside col-md-3 col-lg-2 d-md-block collapse d-flex flex-column align-items-center gap-1">
      <Logo />
      <Menu/>
      <RedesSociales />
    </nav>
    </section>
    </section>
  );
};
