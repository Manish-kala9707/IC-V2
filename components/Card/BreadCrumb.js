import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function BreadcrumbExample() {
  const [array, setArray] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleBreadCrumb = (data) => {
    if (!location.pathname.includes("lang=hi")) {
      const url = location.pathname.replace(new RegExp(`(${data}).*`), "$1");
      return `${url}`;
    } else if (location.pathname.includes("lang=hi")) {
      const url = location.pathname.replace(new RegExp(`(${data}).*`), "$1");
      return `${url}`;
    }
  };

  useEffect(() => {
    const element = location.pathname
      .split("/")
      .filter(
        (item) =>
          item !== "" &&
          item !== "lang=hi" &&
          !item.includes("title") &&
          !item.includes("nid") &&
          !item.includes("type") &&
          !item.includes("page") &&
          !item.includes("searchtext") &&
          !item.includes("category=") &&
          !item.includes("state=") &&
          !item.includes("district=") &&
          !item.includes("city=")
      );
    setArray(element);
  }, [location.pathname]);

console.log("location at bread",location.pathname)
  if (
    location.pathname === "/" ||
    location.pathname === "/lang=hi" ||
    location.pathname === "/lang=hi/" ||
    location.pathname.includes("title")
  ) {
    return null;
  }

  return (
    <Container  fluid className="custom-breadcrumb">
      {location.pathname.includes("/lang=hi") ? (
        <Link to="/lang=hi">{t("Home")}</Link>
      ) : (
        location.pathname !== "/" && <Link to="/">{t("Home")}</Link>
      )}

      {array &&
        Array.isArray(array) &&
        array.map((data, index) => (
          <Link key={index} to={handleBreadCrumb(data)}>
            {" "}
            /{t(data)}
          </Link>
        ))}
    </Container>
  );
}

export default BreadcrumbExample;
