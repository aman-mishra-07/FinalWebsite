import { Card } from "flowbite-react"
import cinematography from '../img/servicesBG/cinematography.jpg'
import photography from '../img/servicesBG/photography.jpg'
import videography from '../img/servicesBG/videography.jpg'
import editing from '../img/servicesBG/editing.jpg'

export default function Flowcards() {
    return (
        <div className="m-1 flex flex-wrap justify-center align-middle">
            <div className="max-w-xs p-4">
                <Card imgSrc={cinematography}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Cinematography
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
    
                </Card>
                
            </div>
            <div className="max-w-xs p-4">
                <Card imgSrc={editing}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Videoediting
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
            <div className="max-w-xs p-4">
                <Card imgSrc={photography}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Photography
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
            <div className="max-w-xs p-4">
                <Card imgSrc={videography}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Videography
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
        </div>
    )
}