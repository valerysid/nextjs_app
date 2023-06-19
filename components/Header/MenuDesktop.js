
import NavItemDesktop from "./NavItemDesktop";
import Button from "../Button";

export default function MenuDesktop() {

    const menuItems = [
        {
            label: "Cases",
            url: "/post?filter=cases"
        },
        {
            label: "Blog",
            url: "/post?filter=blog"
        },
        {
            label: "Career",
            url: "/career"
        },
        {
            label: "Clients and partners",
            url: "/clients-and-partners"
        },
    ]


    return (
        <nav className="hidden md:block">
            <div className="flex items-center">
            <ul className={`flex font-medium`}>
                {menuItems.map((item, index) => (
                    <NavItemDesktop item={item} key={'menuItem' + index} />
                ))}
            </ul>
                <Button size="small" href="/login" className="ml-8">
                    Login
                </Button>
                <Button size="small" href="/contact" color={'red'} className="ml-2">
                    Contact
                </Button>
            </div>
        </nav>
    )
}
