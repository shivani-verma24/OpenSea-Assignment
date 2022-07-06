import NavLink from "./NavLink";

const NavBar = (props) => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <img src="https://opensea.io/static/images/logos/opensea.svg"/>
                <a class="navbar-brand" href="#">{props.companyName}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        <NavLink name={"Explore"} link={"/explore"} />
                        <NavLink name={"Stats"} link={"/stats"} />
                        <NavLink name={"Resources"} link={"/resources"} />
                        <NavLink name={"Create"} link={"/create"} />

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
                                role="button" aria-haspopup="true" aria-expanded="false">Menu</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Status</a>
                                <a class="dropdown-item" href="#">price</a>
                                <a class="dropdown-item" href="#">quantity</a>
                                <a class="dropdown-item" href="#">category</a>

                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
                                role="button" aria-haspopup="true" aria-expanded="false">Recently Listed</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Recently Listed</a>
                                <a class="dropdown-item" href="#">Recently Created</a>
                                <a class="dropdown-item" href="#">Recently sold</a>
                                <a class="dropdown-item" href="#">Recently received</a>

                            </div>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default NavBar;