
function Footer() {
  return (
    <footer className='bg-black py-4 text-white lg:text-md md:text-[11px] text-[7px] mt-10'>
        <div className='max-w-[90%] lg:max-w-5xl mx-auto flex flex-row justify-between items-center'>
            <h4>Copyright &#169;; -MasterIT Shop</h4>
            <ul className="flex items-center lg:gap-8 gap-3">
                <li><a href="">Home</a></li>
                <li><a href="">Contact US</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Term and conditioanl</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer