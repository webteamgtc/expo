const GoodPartner = () => {
    return (
        <section className="bg-[#f5f7ff] py-20">
            <div className="container mx-auto">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                        Still stuck in the same old deal?<br />
                        <span className="text-gray-900">Let’s level things up.</span>
                    </h2>
                    <p className="mt-6 text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                        If your current offer feels just “Okay,” it’s time for a change. Bring us what you’re working with, no pressure, no fluff.
                        We’ll walk you through how we can do better, more value, more support, and more reasons to switch.
                        This isn’t a sales pitch. It’s a chance to grow smarter.
                    </p>

                    {/* Cards */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-20">
                        {/* Card 1 */}
                        <div className="rounded-tl-4xl rounded-br-4xl shadow-xl overflow-hidden bg-white">
                            <div className="bg-[#263f8f] text-white text-sm font-medium text-center py-3">
                                See what others <br /> are missing
                            </div>
                            <div className="p-4 py-10 text-sm text-gray-700 leading-relaxed">
                                Most people don’t even realize their deal is holding them back.
                                Let us show you what’s really possible.
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-tl-4xl rounded-br-4xl shadow-xl overflow-hidden bg-white">
                            <div className="bg-[#263f8f] text-white text-sm font-medium text-center py-3">
                                Small changes. <br /> Big wins
                            </div>
                            <div className="p-4 py-10 text-sm text-gray-700 leading-relaxed">
                                You don’t need to flip everything. Sometimes, just tweaking a few things can bring major results.
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-tl-4xl rounded-br-4xl shadow-xl overflow-hidden bg-white">
                            <div className="bg-[#263f8f] text-white text-sm font-medium text-center py-3">
                                Your goals. <br /> Our plan
                            </div>
                            <div className="p-4 py-10 text-sm text-gray-700 leading-relaxed">
                                We don’t do one-size-fits-all. We build around you, what you need, what you value, and where you’re headed.
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-10">
                        <button className="bg-[#263f8f] hover:bg-[#1c327f] text-white text-base font-semibold rounded-full px-8 py-3 transition-all">
                            Switch Smart
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default GoodPartner