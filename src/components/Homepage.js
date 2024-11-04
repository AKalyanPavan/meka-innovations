import logo from './../images/logo.png';
import logoWhite from './../images/logo-white.png';

import cyclet from './../images/brands/cyclect.webp';
import ntu from './../images/brands/ntu.webp';
import nuhs from './../images/brands/nuhs.png';
import nus from './../images/brands/nus.webp';
import leap from './../images/brands/leap.webp';
import transocean from './../images/brands/transocean.webp';
import simtech from './../images/brands/simtech.webp';
import nec from './../images/brands/nec.webp';
import profileprint from './../images/brands/profileprint.webp';

import hardware from './../images/hardware.png';
import fabrication from './../images/fabrication.png';
import animation from './../images/animation.png';
import digitalDesign from './../images/digital-design.png';

import davisSiphron from './../images/davis-siphron.jpeg';

function Homepage() {
	return(
		<>
			<div className="max-w-[1440px] mx-auto lg:px-[80px] sm:px-[40px] px-[20px] pt-[20px] flex items-center font-medium text-[14px] font-['Inter'] justify-between">
				<div className="flex items-end">
					<img className="w-[114px]" src={logo} />
					<div className="max-[800px]:hidden flex items-center gap-[50px] lg:ml-[100px] ml-[50px]">
						<div>Work</div>
						<div className="flex items-center">
							<span>Services</span>
							<svg className="mt-[2px] ml-[7px]" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 1L5 5L9 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
						<div>About us</div>
						<div>Contact</div>
					</div>
				</div>
				<div className="flex">
					<div className="text-white bg-black rounded-[8px] sm:px-[32px] px-[24px] py-[16px]">Book Intro Call</div>
					{/*Burger Menu*/}
					{/*<div className="min-[800px]:hidden border-[2px] border-solid p-[0.5px] rounded-[5px] border-black ml-[20px]">
						<svg className="" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" stroke-width="0"/>
							<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
							<g id="SVGRepo_iconCarrier"> <path d="M5 12H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 17H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> </g>
						</svg>
					</div>*/}
				</div>
			</div>
			<div className="max-w-[1440px] mx-auto lg:px-[80px] sm:px-[40px] px-[20px] mt-[100px]">
				<div className="font-bold text-[12px] uppercase tracking-[1.5px] font-['Plus_Jakarta_Sans'] leading-[24px]">Some brands that’ve tasted the goodness. You might’ve heard of some of these.</div>
			</div>
			<div className="max-w-[1500px] mx-auto mx-auto mt-[50px]">
				<div className="flex justify-center gap-[60px] items-center overflow-x-hidden mt-[30px] mx-auto">
					<img className="h-[40px]" src={cyclet} />
					<img className="h-[40px]" src={ntu} />
					<img className="h-[40px]" src={nuhs} />
					<img className="h-[40px]" src={nus} />
					<img className="h-[40px]" src={leap} />
					<img className="h-[40px]" src={transocean} />
					<img className="h-[40px]" src={simtech} />
					<img className="h-[40px]" src={nec} />
					<img className="h-[40px]" src={profileprint} />
				</div>
			</div>
			<div className="font-['Plus_Jakarta_Sans'] max-w-[1440px] mx-auto lg:px-[80px] sm:px-[40px] px-[20px] mt-[150px]">
				<div className="font-bold text-[12px] uppercase tracking-[1.5px] leading-[24px] text-center">Our expertise</div>
				<div className="text-[40px] font-bold max-w-[820px] text-center mx-auto mt-[20px]">
					Top-tier<span className="bg-[#A6BAFF] rounded-[16px] pb-[8px]"> growth marketers </span>ready to solve top challenges.
				</div>
				<div className="mt-[100px] grid md:grid-cols-2 grid-cols-1 gap-[25px] justify-items-center w-fit mx-auto">
					<div className="w-fit row-span-5 md:row-start-1">
						<img src={hardware} />
						<div className="p-[25px] bg-[#F6F6F7] rounded-b-[32px]">
							<div className="font-bold text-[24px] leading-[36px] max-w-[343px]">
								Innovation Hardware product design and development services
							</div>
							<div className="mt-[50px] text-[#1C63EE] cursor-pointer font-bold text-[14px] flex items-center w-fit">
								<span>Know More</span>
								<svg className="ml-[5px] mt-[2px]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 9L9 1" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M1 1H9V9" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
						</div>
					</div>
					<div className="w-fit row-span-5 md:row-start-2">
						<img src={fabrication} />
						<div className="p-[25px] bg-[#F6F6F7] rounded-b-[32px]">
							<div className="font-bold text-[24px] leading-[36px] max-w-[343px]">
								Fabrication - No nonsense build-it- for-me fabrication services
							</div>
							<div className="mt-[50px] text-[#1C63EE] cursor-pointer font-bold text-[14px] flex items-center w-fit">
								<span>Know More</span>
								<svg className="ml-[5px] mt-[2px]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 9L9 1" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M1 1H9V9" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
						</div>
					</div>
					<div className="w-fit row-span-5">
						<img src={animation} />
						<div className="p-[25px] bg-[#F6F6F7] rounded-b-[32px]">
							<div className="font-bold text-[24px] leading-[36px] max-w-[343px]">
								Animation 2D/3D product animation videos
							</div>
							<div className="mt-[50px] text-[#1C63EE] cursor-pointer font-bold text-[14px] flex items-center w-fit">
								<span>Know More</span>
								<svg className="ml-[5px] mt-[2px]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 9L9 1" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M1 1H9V9" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
						</div>
					</div>
					<div className="w-fit row-span-5">
						<img src={digitalDesign} />
						<div className="p-[25px] bg-[#F6F6F7] rounded-b-[32px]">
							<div className="font-bold text-[24px] leading-[36px] max-w-[343px]">
								Animation 2D/3D product animation videos
							</div>
							<div className="mt-[50px] text-[#1C63EE] cursor-pointer font-bold text-[14px] flex items-center w-fit">
								<span>Know More</span>
								<svg className="ml-[5px] mt-[2px]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 9L9 1" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M1 1H9V9" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-[150px]">
					<div className="font-bold text-[12px] uppercase tracking-[1.5px] leading-[24px] text-center">our process</div>
					<div className="text-[40px] font-bold max-w-[820px] text-center mx-auto mt-[20px]">
						The world moves fast, we keep pace. Cut through the noise with <span className="bg-[#FFF6A6] rounded-[16px] pb-[8px] pl-[5px]">our process.</span>
					</div>
					<div className="mt-[90px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center w-fit mx-auto gap-[30px]">
						<div className="bg-[#F6F6F7] max-w-[343px] px-[25px] py-[40px] rounded-[32px]">
							<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.9381 5C14.9149 5.19057 15.8125 5.66826 16.5162 6.37194C17.2199 7.07561 17.6976 7.97326 17.8881 8.95M13.9381 1C15.9674 1.22544 17.8597 2.13417 19.3044 3.57701C20.749 5.01984 21.6601 6.91101 21.8881 8.94M20.8881 16.92V19.92C20.8892 20.1985 20.8322 20.4742 20.7206 20.7293C20.6091 20.9845 20.4454 21.2136 20.2402 21.4019C20.035 21.5901 19.7927 21.7335 19.5289 21.8227C19.265 21.9119 18.9855 21.9451 18.7081 21.92C15.631 21.5856 12.6751 20.5341 10.0781 18.85C7.66194 17.3147 5.61345 15.2662 4.07812 12.85C2.38809 10.2412 1.33636 7.27099 1.00812 4.18C0.983127 3.90347 1.01599 3.62476 1.10462 3.36162C1.19324 3.09849 1.33569 2.85669 1.52288 2.65162C1.71008 2.44655 1.93792 2.28271 2.19191 2.17052C2.44589 2.05833 2.72046 2.00026 2.99812 2H5.99812C6.48342 1.99522 6.95391 2.16708 7.32188 2.48353C7.68985 2.79999 7.93019 3.23945 7.99812 3.72C8.12474 4.68007 8.35957 5.62273 8.69812 6.53C8.83266 6.88792 8.86178 7.27691 8.78202 7.65088C8.70227 8.02485 8.51698 8.36811 8.24812 8.64L6.97812 9.91C8.40167 12.4135 10.4746 14.4864 12.9781 15.91L14.2481 14.64C14.52 14.3711 14.8633 14.1858 15.2372 14.1061C15.6112 14.0263 16.0002 14.0555 16.3581 14.19C17.2654 14.5286 18.2081 14.7634 19.1681 14.89C19.6539 14.9585 20.0975 15.2032 20.4146 15.5775C20.7318 15.9518 20.9003 16.4296 20.8881 16.92Z" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							<div className="my-[30px] text-[24px] font-bold">Book a Call</div>
							<div className="font-normal leading-[24px] font-['DM_Sans']">
								Choose a date and time to book a discovery session, during which we’ll define the project objectives, timeline, and budget.
							</div>
						</div>
						<div className="bg-[#F6F6F7] max-w-[343px] px-[25px] py-[40px] rounded-[32px]">
							<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V7L11 1Z" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M11 1V7H17" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M13 12H5" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M13 16H5" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M7 8H6H5" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							<div className="my-[30px] text-[24px] font-bold">Receive an Offer</div>
							<div className="font-normal leading-[24px] font-['DM_Sans']">
								We’ll send you a bespoke project proposal including deliverables, project roadmap, and a quote in 1-2 business days.
							</div>
						</div>
						<div className="bg-[#F6F6F7] max-w-[343px] px-[25px] py-[40px] rounded-[32px]">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 10.0857V11.0057C20.9988 13.1621 20.3005 15.2604 19.0093 16.9875C17.7182 18.7147 15.9033 19.9782 13.8354 20.5896C11.7674 21.201 9.55726 21.1276 7.53447 20.3803C5.51168 19.633 3.78465 18.2518 2.61096 16.4428C1.43727 14.6338 0.879791 12.4938 1.02168 10.342C1.16356 8.19029 1.99721 6.14205 3.39828 4.5028C4.79935 2.86354 6.69279 1.72111 8.79619 1.24587C10.8996 0.770634 13.1003 0.988061 15.07 1.86572" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M21 3.00562L11 13.0156L8 10.0156" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							<div className="my-[30px] text-[24px] font-bold">Kickoff the Project</div>
							<div className="font-normal leading-[24px] font-['DM_Sans']">
								Sign the contract, send the deposit, lean back, and let us do our thing. We’ll invite you to a design review meeting in 5-7 business days.
							</div>
						</div>
					</div>
				</div>
				<div className="mt-[100px] mb-[150px] text-white bg-black rounded-[8px] sm:px-[32px] px-[24px] py-[16px] w-fit mx-auto">Book a Call</div>
				<div className="bg-[#CDFFA6] sm:px-[45px] px-[25px] py-[55px] rounded-[32px] max-w-[1085px] mx-auto">
					<div className="text-[12px] font-bold uppercase tracking-[1.5px]">What our clients say</div>
					<div className="lg:text-[40px] sm:text-[30px] text-[24px] font-bold lg:leading-[56px] sm:leading-[44px] leading-[33px] max-w-[880px] mt-[40px]">
						mēkā has become our go-to resource for crafting exquisite button cover for deep sea vessels and designing cutting-edge websites.
					</div>
					<div className="mt-[70px] flex sm:flex-row flex-col gap-[30px] items-end sm:justify-between">
						<div className="flex items-center max-sm:mr-auto">
							<img className="w-[48px] rounded-[50%]" src={davisSiphron} />
							<div className="ml-[20px]">
								<div className="font-bold">Davis Siphron</div>
								<div className="text-[14px]">VP of Engineering, TransOcean</div>
							</div>
						</div>
						<div className="text-[#1C63EE] cursor-pointer font-bold text-[14px] flex items-center w-fit max-sm:ml-auto">
							<span>View all customers</span>
							<svg className="ml-[5px] mt-[2px]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 9L9 1" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M1 1H9V9" stroke="#1C63EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
					</div>
				</div>
				<div className="mt-[150px] text-center">
					<div className="font-bold text-[40px]">Free Design Consultation</div>
					<div className="font-normal font-['DM_Sans'] leading-[24px] mt-[30px]">
						Let's chat about your project goals and how we can help. Book a free consultation today.
					</div>
					<div className="mt-[50px] text-white bg-black rounded-[8px] sm:px-[32px] px-[24px] py-[16px] w-fit mx-auto">Book a Call</div>
				</div>
			</div>
			<div className="bg-[#0E1116] mt-[150px] pt-[70px]">
				<div className="font-['DM_Sans'] lg:max-w-[1440px] max-w-[500px] mx-auto lg:px-[80px] sm:px-[40px] px-[20px]">
					<div className="max-lg:mx-auto">
						<img className="w-[114px]" src={logoWhite} />
					</div>
					<div className="flex lg:flex-row flex-col gap-[50px] mt-[40px] justify-between">
						<div className="text-[14px] text-[#949BA0] max-lg:mr-auto">
							<div className="max-w-[300px] leading-[24px]">
								mēkā is a product design agency specializing in medical device design and development. We also offer fabrication, 2D/3D animation, and UI/UX design services.
							</div>
							<div className="mt-[60px] text-[12px] uppercase tracking-[1px]">
								Follow us on
							</div>
							<div className="mt-[25px] flex gap-[25px] text-white">
								<span>Youtube</span>
								<span>Instagram</span>
								<span>Linkedin</span>
								<span>X</span>
							</div>
						</div>
						<div className="grid lg:grid-cols-3 grid-cols-2 md:gap-x-[0px] gap-y-[50px] text-white font-normal text-[14px] xl:mr-[100px] mr-auto">
							<div className="flex flex-col gap-[24px]">
								<span>Home</span>
								<span>Work</span>
								<span>Services</span>
								<span>About Us</span>
								<span>Contact</span>
							</div>
							<div className="flex flex-col gap-[24px]">
								<span>Blog</span>
								<span>Case Studies</span>
								<span>Resources</span>
								<span>Frequently Asked Questions</span>
								<span>Privacy Policy</span>
								<span>Terms and Conditions</span>
							</div>
							<div className="flex flex-col gap-[24px]">
								<span className="text-[#949BA0]">Whatsapp</span>
								<span className="text-white">+12 3456 7890</span>
							</div>
						</div>
					</div>
					<div className="font-['DM_Sans'] text-[#949BA0] text-[14px] font-normal leading-[24px] py-[50px]">
						© 2024 Meka Innovation Pvt Ltd.
					</div>
				</div>
			</div>
		</>
	)
}

export default Homepage;