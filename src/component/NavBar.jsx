

const [top, setTop] = useState(true);
useEffect(() => {
    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
}, [top]);

export default Navbar;
