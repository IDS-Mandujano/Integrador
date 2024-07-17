import Section from "../molecules/Section";

function Header() {
    const user = {
        name: "Nombre Usuario",
    };

    return (
        <header className="bg-teal-500 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Section user={user} />
                </div>
            </div>
        </header>
    );
}

export default Header;
