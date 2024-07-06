const Menu = [
    {
      id: 1,
      name: 'Home',
      link: '#home',
    },
    {
      id: 2,
      name: 'About',
      link: '#projects',
    },
    {
      id: 3,
      name: 'Products',
      link: '#blog',
    },
    {
      id: 4,
      name: 'Order',
      link: '#reach_out',
    },
    {
      id: 5,
      name: 'Contact',
      link: '#karobiaBot',
    },
  ];
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
const Navbar = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-primary to-secondary/90 text-white">
        <div className="py-2">
            <div >
            <ul className="flex  gap-10 text-center justify-center">
               {Menu.map((data)=>(
                <li key={data.id}
                className="text-xl py-3 space-x-6">
                <button onClick={()=>scrollToSection(data.link)}
                className=" hover:scale-105 font-medium">{data.name}</button>
                </li>
               ))}
            </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar