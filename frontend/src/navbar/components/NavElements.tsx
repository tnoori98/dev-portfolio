import { items } from "../data/items";
import type { Item } from "../interfaces/Item";

function NavElements({closeMenu}: {closeMenu?: () => void}){
    return(
        <ul className="nav-ul">
        {items.map((item: Item) => (
          <li key={item.href} className="nav-li">
            <a className="nav-link" href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          </li>
      ))}
    </ul>
  );
}

export default NavElements