const Navbar = () => {
  const links = [
    { label: "World", href: "https://sed.gov.iq" },
    { label: "U.S.", href: "https://sed.gov.iq" },
    { label: "Technology", href: "https://sed.gov.iq" },
    { label: "Design", href: "https://sed.gov.iq" },
    { label: "Culture", href: "https://sed.gov.iq" },
    { label: "Business", href: "https://sed.gov.iq" },
    { label: "Politics", href: "https://sed.gov.iq" },
    { label: "Opinion", href: "https://sed.gov.iq" },
    { label: "Science", href: "https://sed.gov.iq" },
    { label: "Health", href: "https://sed.gov.iq" },
    { label: "Style", href: "https://sed.gov.iq" },
    { label: "Travel", href: "https://sed.gov.iq" },
  ];

  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        {links.map((link, index) => (
          <a key={index} className="p-2 link-secondary" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
