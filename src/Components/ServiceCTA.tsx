import Link from "next/link";

function ServiceCTA() {

    return (
        <div className="flex flex-col items-center justify-center sm:space-y-18 space-y-7 sm:py-26 py-18 w-full bg-gray-300/40">

            <div className="flex flex-col sm:space-y-3 space-y-7 items-center text-center justify-center font-serif">
                <h1 className="text-3xl  font-bold">Simplifiez la gestion de votre patrimoine immobilier.</h1> 
                <h1 className="sm:text-3xl text-xl font-bold hidden sm:flex">Confiez-nous vos biens, concentrez-vous sur l'essentiel</h1>
            </div>

            <Link href="/Contact" className="text-center px-12 text-xl text-pretty py-4 text-white bg-[#F39200] rounded-lg font-semibold font-sans">Ecivez-Nous </Link>
        </div>
    )
}

export default ServiceCTA
