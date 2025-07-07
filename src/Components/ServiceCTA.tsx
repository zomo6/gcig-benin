import Link from "next/link";

function ServiceCTA() {

    return (
        <div className="flex flex-col items-center justify-center sm:space-y-14 space-y-7 sm:py-26 py-18 w-full bg-gray-300/40">

            <div className="flex flex-col sm:space-y-2 space-y-7 items-center text-center justify-center font-serif">
                <h1 className="sm:text-3xl text-2xl  font-bold">Simplifiez la gestion de votre patrimoine immobilier.</h1> 
                <h1 className="sm:text-3xl text-xl font-bold hidden sm:flex">Confiez-nous vos biens, concentrez-vous sur l'essentiel</h1>
            </div>

            <Link href="/Contact" className="text-center sm:px-12 px-7 text-xl text-pretty sm:py-4 py-3 text-white bg-[#F39200] rounded-lg font-semibold font-sans">Ecivez-Nous </Link>
        </div>
    )
}

export default ServiceCTA
