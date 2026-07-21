function FooterLinks({ title, links }) {
    return (
        <div>
            <h3 className="text-xl font-bold mb-6 text-white">
                {title}
            </h3>

            <ul className="space-y-3">
                {links.map((item) => (
                    <li key={item}>
                        <a
                            href="#"
                            className="
                                text-slate-400
                                hover:text-blue-400
                                transition-all
                                duration-300
                                hover:translate-x-2
                                inline-flex
                            "
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterLinks;