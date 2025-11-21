
import "../style/navBottom.scss"
export default function NavBottom({ data }) {
    console.log(data);
    return (
        <div className="nav-bottom-container">
            <div className="nav-bottom">
                <div className="nav-bottom-left">
                    <a href="/" >
                        <img src="./logo-vitality.png" alt="Bajaj Vitality" />
                    </a>
                </div>
                <div className="nav-bottom-center">
                    <ul className="navlist">{

                        data.navItems?.map((item, index) => (
                            <li className="navlist-item dropdown" key={index}>
                                <a href={item.href}>{item.label}
                                    {item.dropdown && <img src="./dropdown-icon.svg" alt="Bajaj Vitality" />}
                                </a>
                                {item.dropdown &&
                                    <ul className="navlist-dropdown">
                                        {item.dropdown?.map((ele, i) => (
                                            <li className="navlist-dropdown-item" key={i}><a href={ele.href}>{ele.label}</a></li>
                                        ))}
                                    </ul>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="nav-bottom-right">
                    <div className="open-schedule">
                        <img src="./clock-icon.svg" alt="Bajaj Vitality" />
                        <div className="open-schedule-content">
                            <div className="open-schedule-text">{data.openHoursTitle}</div>
                            <div className="open-schedule-timeline">{data.openHoursTimeline}</div>
                        </div>
                    </div>
                    <div className="book-appoinment">
                        <a href={data.ctaHref}>
                            {data.ctaLabel}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}