
export default function Header ():JSX.Element{

    const URL = "https://www.alamy.com/stock-photo-winking-yellow-smiley-130732012.html?pv=1&stamp=2&imageid=3332E9A7-28A5-4B42-AC1F-CFE77CA73DF2&p=308828&n=0&orientation=0&pn=1&searchtype=0&IsFromSearch=1&srch=foo%3dbar%26st%3d0%26pn%3d1%26ps%3d100%26sortby%3d2%26resultview%3dsortbyPopular%26npgs%3d0%26qt%3dsmiley%2520face%2520emoji%26qt_raw%3dsmiley%2520face%2520emoji%26lic%3d3%26mr%3d0%26pr%3d0%26ot%3d0%26creative%3d%26ag%3d0%26hc%3d0%26pc%3d%26blackwhite%3d%26cutout%3d%26tbar%3d1%26et%3d0x000000000000000000000%26vp%3d0%26loc%3d0%26imgt%3d0%26dtfr%3d%26dtto%3d%26size%3d0xFF%26archive%3d1%26groupid%3d%26pseudoid%3d%26a%3d%26cdid%3d%26cdsrt%3d%26name%3d%26qn%3d%26apalib%3d%26apalic%3d%26lightbox%3d%26gname%3d%26gtype%3d%26xstx%3d0%26simid%3d%26saveQry%3d%26editorial%3d1%26nu%3d%26t%3d%26edoptin%3d%26customgeoip%3d%26cap%3d1%26cbstore%3d1%26vd%3d0%26lb%3d%26fi%3d2%26edrf%3d%26ispremium%3d1%26flip%3d0%26pl%3d"

    return(
        <div className="header">
            <img className="ballImage" src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="glass sphere in a blue background"/>
            <h1>Zahra B.G.H</h1>
            <h2>Trainee software developer.</h2>
            <h3>Currently playing around with react.</h3>
            <div className="buttons">
                <a href={URL} className="link">Email</a>
                <a href={URL} className="link">Direct Message</a>
            </div>
        </div>
    )
}