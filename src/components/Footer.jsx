import { DragonLogo } from "./Navbar.jsx";

function FooterLink({ value, link }) {
  return (
    <li class="mb-4 text-white">
      <a href={link} class="hover:underline">
        {value}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer class="bg-slate-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="hidden lg:flex mb-6 md:mb-0">
            <DragonLogo />
          </div>
          <div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-1">
            <div>
              
            </div>
            <div>
              
            </div>
            <div>
              <h2 class="mb-6 text-sm font-bold lg:font-semibold text-white uppercase ">
                Contacts
              </h2>
              <ul class="text-white font-medium">
                <FooterLink value="Email us" link="#" />
                <FooterLink value="Customer support" link="#" />
              </ul>
            </div>
          </div>
        </div>
        <hr class="text-grigino my-6 sm:mx-auto lg:my-8" />
        <div class="flex-cols text-center lg:flex justify-between">
          <span class="text-sm text-white">
            2024{" "}
            <a href="/" class="hover:underline">
              | Classe 5ia.
            </a>
          </span>
          
        </div>
      </div>
    </footer>
  );
}
