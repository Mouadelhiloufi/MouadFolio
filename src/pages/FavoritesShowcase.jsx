"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import {
  Music,
  Heart,
  Star,
  Trophy,
  ExternalLink,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Target,
  Award,
  Crown,
  Zap,
} from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function FavoritesShowcase() {
  const [activeSection, setActiveSection] = useState("music")
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef(null)

  const sections = [
    { id: "music", label: "Music", icon: Music },
    { id: "snooker", label: "Snooker", icon: Target },
    { id: "football", label: "Football", icon: Heart },
  ]

  const artists = [
    {
      name: "ISSAM",
      genre: "Arabic Rap",
      albums: ["Crystal"],
      spotifyUrl: "https://open.spotify.com/intl-fr/artist/37lslcg6zP6eAQAONiYvWN?si=0Rl1DIZ9RUC8Zu9O8XkcdQ",
      image: "./Issam.jpg",
      albumImages: ["/crystal.jpg"],
    },
    {
      name: "Shobee",
      genre: "Hip-Hop/Rap",
      albums: ["HOWLS", "NAAR"],
      spotifyUrl: "https://open.spotify.com/intl-fr/artist/5Et8bRmkENeaA7SPwj1OxL?si=f84bOSAXQmGybXlB_PNHig",
      image: "/Shobee.jpg",
      albumImages: ["/howls.jpg", "/naar.jpg"],
    },
    {
      name: "Madd",
      genre: "Trap/Hip-Hop",
      albums: ["SĒNSUS", "Black Rose"],
      spotifyUrl: "https://open.spotify.com/intl-fr/artist/7DBIKXxSh2BMPqSN7UB4rS?si=hSJvAbDCSMu0EzkeKtippA",
      image: "/madd.jpg",
      albumImages: ["/sunsus.jpg", "/blackrose.jpg"],
    },
  ]

  const snookerPlayers = [
    {
      name: "Ronnie O'Sullivan",
      title: "The Rocket",
      achievements: "7-time World Champion",
      image:
        "https://cdn.images.express.co.uk/img/dynamic/4/1200x712/secondary/ronnie-osullivan-6218907.jpg?r=1749544037687",
      stats: "1000+ Century Breaks",
      specialty: "Fastest 147 Break",
    },
    {
      name: "Aamir El Amiri",
      title: "ISTIFANO",
      achievements: "0-time World Champion 😂",
      image: "/snokerimgforAamiri.png",
      stats: "40+ Century Breaks",
      specialty: "Fastest 147 Break",
    },
  ]

  const footballers = [
    {
      name: "Alessandro Del Piero",
      position: "Forward",
      club: "Juventus Legend",
      image: "https://i.eurosport.com/2012/03/25/824345-20542458-2560-1440.jpg",
      achievements: "World Cup Winner 2006",
      goals: "290+ Goals",
      years: "1993-2012",
    },
    {
      name: "Gianluigi Buffon",
      position: "Goalkeeper",
      club: "Juventus Legend",
      image: "https://th.bing.com/th/id/OIP.ouRm0Aa8I7R5rlGSX8KbvgHaGq?rs=1&pid=ImgDetMain&cb=idpwebpc1",
      achievements: "World Cup Winner 2006",
      goals: "685+ Clean Sheets",
      years: "2001-2018",
    },
  ]

  // Memoized list of all album images
  const allAlbumImages = useMemo(
    () =>
      artists.flatMap((artist) =>
        artist.albumImages.map((img, index) => ({
          image: img,
          artist: artist.name,
          album: artist.albums[index],
        })),
      ),
    [artists],
  )

  // Auto-slide functionality for music section
  useEffect(() => {
    if (activeSection === "music") {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % allAlbumImages.length)
      }, 3000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [activeSection, allAlbumImages.length])

  // Restart interval after manual navigation
  const restartInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (activeSection === "music") {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % allAlbumImages.length)
      }, 3000)
    }
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + allAlbumImages.length) % allAlbumImages.length)
    restartInterval()
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % allAlbumImages.length)
    restartInterval()
  }

  const handleIndicatorClick = (index) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setCurrentSlide(index)
    restartInterval()
  }

  return (
    <>
       <div className="App relative">
                    <Header  />
                </div>
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Sparkles className="text-orange-500" size={24} />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold 
                          bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              My Favorites
            </h1>
            <Sparkles className="text-orange-500" size={24} />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Discover the artists, athletes, and passions that inspire me every day
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12 px-2 sm:px-0">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-1 sm:p-2 flex gap-1 sm:gap-2 flex-wrap justify-center">
            {sections.map((section) => {
              const IconComponent = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 
                           rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm md:text-base ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                      : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  <IconComponent size={16} className="sm:w-5 sm:h-5" />
                  <span className="font-medium">{section.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative mt-12" >
            
          {activeSection === "music" && (
            <div className="animate-fade-in">
              {/* Artist Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                {artists.map((artist, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative group">
                      <img
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 
                                 rounded-full object-cover border-4 border-orange-100 
                                 shadow-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 rounded-full border-4 border-transparent 
                                    group-hover:border-orange-300 transition-all duration-300"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-3 sm:mt-4">
                      {artist.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{artist.genre}</p>
                    <a
                      href={artist.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 sm:mt-4 inline-flex items-center gap-2 
                               bg-gradient-to-r from-green-500 to-green-600 text-white 
                               px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm
                               hover:from-green-600 hover:to-green-700 transition-all duration-300"
                    >
                      <span>Listen on Spotify</span>
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    </a>
                  </div>
                ))}
              </div>

              {/* Album Slider */}
              <div className="mt-8 sm:mt-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-black-600 
                             drop-shadow-lg mb-4 sm:mb-6 mx-4 sm:mx-12">
                  Albums Collection
                </h3>
                <div className="relative max-w-6xl mx-auto px-2 sm:px-0">
                  <div className="overflow-hidden rounded-xl">
                    <div
                      className="flex transition-transform duration-1000 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
                    >
                      {allAlbumImages.map((album, index) => (
                        <div key={index} className="w-1/3 flex-shrink-0 px-1 sm:px-2">
                          <div className="bg-black rounded-lg sm:rounded-xl overflow-hidden 
                                       shadow-lg hover:scale-105 transition-transform duration-300">
                            <img
                              src={album.image || "/placeholder.svg"}
                              alt={album.album}
                              className="w-full h-[150px] sm:h-[200px] md:h-[250px] object-cover"
                            />
                            <div className="p-2 sm:p-3 text-white">
                              <h4 className="font-bold text-xs sm:text-sm md:text-md truncate">
                                {album.album}
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-400">{album.artist}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 
                             bg-white p-1.5 sm:p-2 rounded-full shadow-md z-10 
                             hover:bg-orange-100 transition-colors"
                  >
                    <ChevronLeft className="text-orange-600 w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 
                             bg-white p-1.5 sm:p-2 rounded-full shadow-md z-10 
                             hover:bg-orange-100 transition-colors"
                  >
                    <ChevronRight className="text-orange-600 w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Indicators */}
                  <div className="flex justify-center mt-4 gap-2">
                    {allAlbumImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleIndicatorClick(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          currentSlide === index ? "bg-orange-600" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Snooker Section */}
          {activeSection === "snooker" && (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <div className="flex justify-center items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                    <Target className="text-white" size={24} />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                    Snooker Masters
                  </h2>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                    <Crown className="text-white" size={24} />
                  </div>
                </div>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                  The precision, strategy, and artistry of the gentleman's game
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mt-8 sm:mt-12 md:mt-16 mx-auto">
                {snookerPlayers.map((player, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden 
                                  hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 
                                  border border-green-100">
                      <div className="relative overflow-hidden h-60 sm:h-72 md:h-80">
                        <img
                          src={player.image || "/placeholder.svg"}
                          alt={player.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          <Zap size={16} className="inline mr-1" />
                          LEGEND
                        </div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-3xl font-bold mb-2">{player.name}</h3>
                          <p className="text-green-300 font-semibold text-lg mb-1">{player.title}</p>
                          <p className="text-green-200 text-sm">{player.specialty}</p>
                        </div>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-white to-green-50">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Trophy className="text-green-600" size={20} />
                            <span className="text-lg font-bold text-gray-800">{player.achievements}</span>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} className="text-green-500" fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <div className="bg-green-100 rounded-xl p-4">
                          <div className="flex items-center gap-2 text-green-800">
                            <Award size={18} />
                            <span className="font-semibold">{player.stats}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Football Section */}
          {activeSection === "football" && (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <div className="flex justify-center items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                    Football Legends
                  </h2>
                  <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center">
                    <Crown className="text-white" size={24} />
                  </div>
                </div>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">Icons who defined an era of beautiful football</p>
              </div>

              {/* Juventus Banner */}
              <div className="relative mb-12 overflow-hidden">
                <div className="bg-gradient-to-r from-black via-white to-black p-8 rounded-3xl shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
                  <div className="text-center relative z-10">
                    <div className="flex justify-center items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">J</span>
                      </div>
                      <h3 className="text-5xl font-bold">
                        <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                          JUVENTUS
                        </span>
                      </h3>
                      <div className="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-2xl">FC</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xl font-semibold mb-4">Fino Alla Fine - Until The End</p>
                    <div className="flex justify-center gap-4 flex-wrap">
                      <div className="bg-black text-white px-6 py-3 rounded-full shadow-lg">
                        <span className="font-bold">⚪⚫ La Vecchia Signora ⚫⚪</span>
                      </div>
                      <div className="bg-white border-2 border-black text-black px-6 py-3 rounded-full shadow-lg">
                        <span className="font-bold">🏆 36 Serie A Titles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {footballers.map((player, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden 
                                  hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 
                                  border-2 border-gray-100">
                      <div className="relative overflow-hidden h-60 sm:h-72 md:h-80">
                        <img
                          src={player.image || "/placeholder.svg"}
                          alt={player.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                          <Crown size={16} />
                          LEGEND
                        </div>
                        <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-xs font-bold border-2 border-black">
                          JUVE
                        </div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-3xl font-bold mb-2">{player.name}</h3>
                          <p className="text-orange-300 font-semibold text-lg mb-1">{player.position}</p>
                          <p className="text-gray-300 text-sm">{player.years}</p>
                        </div>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Trophy className="text-orange-500" size={20} />
                            <span className="text-lg font-bold text-gray-800">{player.achievements}</span>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} className="text-orange-400" fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-black text-white rounded-xl p-3 text-center">
                            <div className="font-bold text-lg">{player.goals}</div>
                            <div className="text-xs text-gray-300">Career Stats</div>
                          </div>
                          <div className="bg-gray-100 rounded-xl p-3 text-center">
                            <div className="font-bold text-lg text-gray-800">{player.club}</div>
                            <div className="text-xs text-gray-600">Legacy</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

                <Footer />
</>
  )
}
