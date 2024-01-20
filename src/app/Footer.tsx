import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface FooterProps { }

const Footer: FC<FooterProps> = () => {
    return (
        <div className='flex items-center justify-center p-4 text-slate-200'>
            <div className='absolute bottom-0 flex h-16 gap-6 p-4 text-slate-200'>
                <Link href={"https://github.com/M-Sanjay12o52o"}>
                    <Image
                        className='flex gap-2 align-baseline'
                        src={"/github-inverted-svgrepo-com.svg"}
                        alt='github'
                        height={42}
                        width={42}
                    />
                </Link>
                <Link href={"https://discord.com/channels/@sanjay_2000"}>
                    {/* <Image
                        className='flex gap-2 align-baseline'
                        src={"/discord-icon-svgrepo-com.svg"}
                        alt='discord'
                        height={42}
                        width={42}
                    /> */}
                </Link>
                <Link href={"https://twitter.com/msanjay12o5"}>
                    <Image
                        className='flex gap-2 align-baseline'
                        src={"/twitter-logo-thin-svgrepo-com.svg"}
                        alt='twitter'
                        height={42}
                        width={42}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
