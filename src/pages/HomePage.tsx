import landingImage from '../assets/landing.png'
import appDownloadImage from '../assets/appDownload.png'

function HomePage() {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Get some noice takeaways
            </h1>
            <span className="text-xl">Just a few buttons and you'll be stuffed</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} alt="Smartphones" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Order food faster!
                </span>
                <span>
                    Download the food app to get all these benefits
                </span>
                <img src={appDownloadImage} alt="Download image" />
            </div>
        </div>
    </div>
  )
}

export default HomePage