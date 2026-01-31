"use client";

interface InstructorSectionProps {
    data: {
        heading: string;
        name: string;
        designation: string;
        experience: string;
        studentsTaught: string;
        specialization: string;
        bio: string;
        credentials: string[];
        teachingStyle: {
            heading: string;
            points: string[];
        };
        quote: string;
    };
}

export default function InstructorSection({ data }: InstructorSectionProps) {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                    {data.heading}
                </h2>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Instructor Info */}
                    <div>
                        {/* Instructor Card */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                                    {data.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{data.name}</h3>
                                    <p className="text-gray-600">{data.designation}</p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center bg-white rounded-lg p-3">
                                    <p className="text-2xl font-bold text-blue-600">
                                        {data.experience}
                                    </p>
                                    <p className="text-xs text-gray-600">Experience</p>
                                </div>
                                <div className="text-center bg-white rounded-lg p-3">
                                    <p className="text-2xl font-bold text-blue-600">
                                        {data.studentsTaught}
                                    </p>
                                    <p className="text-xs text-gray-600">Students</p>
                                </div>
                                <div className="text-center bg-white rounded-lg p-3">
                                    <p className="text-sm font-bold text-blue-600">
                                        {data.specialization}
                                    </p>
                                    <p className="text-xs text-gray-600">Specialty</p>
                                </div>
                            </div>
                        </div>

                        {/* Bio */}
                        <p className="text-gray-700 leading-relaxed mb-6">{data.bio}</p>

                        {/* Quote */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                            <i className="fas fa-quote-left text-blue-600 text-2xl mb-3 block"></i>
                            <p className="text-gray-700 italic leading-relaxed">{data.quote}</p>
                        </div>
                    </div>

                    {/* Right Column - Credentials & Teaching Style */}
                    <div>
                        {/* Credentials */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <i className="fas fa-certificate text-blue-600"></i>
                                Credentials & Achievements
                            </h3>
                            <ul className="space-y-3">
                                {data.credentials && data.credentials.map((credential, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <i className="fas fa-check-circle text-green-500 mt-1"></i>
                                        <span className="text-gray-700">{credential}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Teaching Style */}
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <i className="fas fa-chalkboard-teacher text-green-600"></i>
                                {data.teachingStyle.heading}
                            </h3>
                            <ul className="space-y-3">
                                {data.teachingStyle.points && data.teachingStyle.points.map((point, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <i className="fas fa-arrow-right text-green-600 mt-1"></i>
                                        <span className="text-gray-700">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
