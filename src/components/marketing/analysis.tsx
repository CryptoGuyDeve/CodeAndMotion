import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Intelligent Web Development  <br /><span className="font-subheading italic">Technology</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        Unlock the power of cutting-edge web development technology to build responsive, high-performing websites that adapt to your business needs. Our intelligent solutions optimize user experience, ensuring faster load times and seamless interactions across all devices.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">

            <Container delay={0.2}>
                <div className="rounded-2xl bg-background/40 relative border border-border/50">
                    <MagicCard
                        gradientFrom="#38bdf8"
                        gradientTo="#3b82f6"
                        gradientColor="rgba(59,130,246,0.1)"
                        className="p-4 lg:p-8 w-full overflow-hidden"
                    >
                        <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">
                                Web Development Insights
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Leverage data-driven insights to optimize your website's performance and user engagement.
                            </p>

                            <div className="space-y-4">
                                <div className="flex justify-between items-baseline">
                                    <div>
                                        <div className="text-3xl font-semibold">
                                            15,436
                                        </div>
                                        <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                            <TrendingUpIcon className="w-4 h-4" />
                                            +18% site traffic increase
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="icon" variant="ghost">
                                            <FilterIcon className="w-5 h-5" />
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <DownloadIcon className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                        <div>Page</div>
                                        <div>Status</div>
                                        <div>Visitors</div>
                                        <div>Conversion Rate</div>
                                    </div>
                                    {[ 
                                        { name: "Home", status: "Live", visitors: "10K", conversion: "15%" },
                                        { name: "About Us", status: "Live", visitors: "4K", conversion: "10%" },
                                        { name: "Contact", status: "Under Development", visitors: "1K", conversion: "N/A" },
                                    ].map((page) => (
                                        <div key={page.name} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                            <div>{page.name}</div>
                                            <div>{page.status}</div>
                                            <div>{page.visitors}</div>
                                            <div className="font-semibold">{page.conversion}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </MagicCard>
                </div>
            </Container>

            <Container delay={0.2}>
                <div className="rounded-2xl bg-background/40 relative border border-border/50">
                    <MagicCard
                        gradientFrom="#38bdf8"
                        gradientTo="#3b82f6"
                        gradientColor="rgba(59,130,246,0.1)"
                        className="p-4 lg:p-8 w-full overflow-hidden"
                    >
                        <div className="absolute bottom-0 right-0 bg-sky-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">
                                User Interaction Metrics
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Understand user behavior and interactions to further enhance your website’s design.
                            </p>

                            <div className="space-y-4">
                                <div className="flex justify-between items-baseline">
                                    <div>
                                        <div className="text-3xl font-semibold">98,754</div>
                                        <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                            <TrendingUpIcon className="w-4 h-4" />
                                            +22% improvement in user engagement
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="icon" variant="ghost">
                                            <FilterIcon className="w-5 h-5" />
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <DownloadIcon className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Interaction Table */}
                                <div className="space-y-2">
                                    <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                        <div>Page</div>
                                        <div>Users</div>
                                        <div>Sessions</div>
                                        <div>Bounce Rate</div>
                                    </div>
                                    {[ 
                                        { page: "Home", users: "45K", sessions: "60K", bounceRate: "30%" },
                                        { page: "Blog", users: "25K", sessions: "35K", bounceRate: "35%" },
                                        { page: "Portfolio", users: "10K", sessions: "15K", bounceRate: "25%" },
                                    ].map((metric) => (
                                        <div key={metric.page} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                            <div>{metric.page}</div>
                                            <div>{metric.users}</div>
                                            <div>{metric.sessions}</div>
                                            <div className="font-semibold">{metric.bounceRate}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </MagicCard>
                </div>
            </Container>
        </div>

        </div>
    )
};

export default Analysis;
