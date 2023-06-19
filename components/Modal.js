export default function Modal({ children, openModal, setOpenModal }) {
    return (
        <div className={`fixed z-50 flex justify-center items-center inset-0 w-full h-full ${openModal ? 'block' : 'hidden'}`}>
            <div onClick={() => setOpenModal(false)} className="absolute inset-0 bg-black opacity-50" />
            <div className="relative z-10  w-full md:w-[600px] bg-white p-4 rounded-md">
                {children}
            </div>
        </div>
    )
}