import React from 'react';
import { SidebarProps } from '@/types/index';
import { SIDEBAR_ITEMS } from '@/constants/index';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, setActiveTab }) => {
  return (
    <aside
    className={`bg-white transition-all duration-500 ease-in-out transform ${isOpen ? 'w-64' : ''} flex flex-col overflow-y-auto custom-scrollbar`}
    >
      <div className="p-5 flex justify-between items-center relative">
        {/* Logo Section */}
        <div className={`flex items-center justify-center transform transition-all duration-500 ${isOpen ? 'w-full border-b' : ''}`}>
        
        <svg width="180" height="82" viewBox="0 0 230 82" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${isOpen ?'h-32' :'hidden' }`}>
          <path d="M92.731 42.2241V50.3945C92.41 50.7816 91.9144 51.2017 91.2441 51.6548C90.5739 52.0985 89.7101 52.4808 88.6528 52.8018C87.5955 53.1227 86.3164 53.2832 84.8154 53.2832C83.4844 53.2832 82.2713 53.0661 81.1763 52.6318C80.0812 52.1882 79.1372 51.5415 78.3442 50.6919C77.5607 49.8423 76.9565 48.8039 76.5317 47.5767C76.1069 46.34 75.8945 44.9287 75.8945 43.3428V42.0542C75.8945 40.4683 76.0975 39.057 76.5034 37.8203C76.9188 36.5837 77.5088 35.5405 78.2734 34.6909C79.0381 33.8413 79.9491 33.1947 81.0063 32.751C82.0636 32.3073 83.2389 32.0854 84.5322 32.0854C86.3258 32.0854 87.7985 32.3781 88.9502 32.9634C90.1019 33.5392 90.9798 34.3416 91.584 35.3706C92.1976 36.3901 92.5752 37.5607 92.7168 38.8823H88.5962C88.4924 38.1838 88.2941 37.5749 88.0015 37.0557C87.7088 36.5365 87.2887 36.1305 86.7412 35.8379C86.2031 35.5452 85.5046 35.3989 84.6455 35.3989C83.9375 35.3989 83.305 35.5452 82.748 35.8379C82.2005 36.1211 81.738 36.5412 81.3604 37.0981C80.9827 37.6551 80.6948 38.3442 80.4966 39.1655C80.2983 39.9868 80.1992 40.9403 80.1992 42.0259V43.3428C80.1992 44.4189 80.3031 45.3724 80.5107 46.2031C80.7184 47.0244 81.0252 47.7183 81.4312 48.2847C81.8465 48.8416 82.3563 49.2617 82.9604 49.5449C83.5646 49.8281 84.2679 49.9697 85.0703 49.9697C85.7406 49.9697 86.2975 49.9131 86.7412 49.7998C87.1943 49.6865 87.5578 49.5496 87.8315 49.3892C88.1147 49.2192 88.3319 49.0588 88.4829 48.9077V45.2544H84.603V42.2241H92.731ZM102.955 53.2832C101.765 53.2832 100.698 53.0944 99.7544 52.7168C98.8104 52.3298 98.008 51.7964 97.3472 51.1167C96.6958 50.437 96.1955 49.6488 95.8462 48.752C95.4969 47.8457 95.3223 46.8828 95.3223 45.8633V45.2969C95.3223 44.1357 95.4875 43.0737 95.8179 42.1108C96.1483 41.1479 96.6203 40.3125 97.2339 39.6045C97.8569 38.8965 98.6121 38.3537 99.4995 37.9761C100.387 37.589 101.388 37.3955 102.501 37.3955C103.587 37.3955 104.55 37.5749 105.39 37.9336C106.23 38.2923 106.934 38.8021 107.5 39.4629C108.076 40.1237 108.51 40.9167 108.803 41.8418C109.095 42.7575 109.242 43.777 109.242 44.9004V46.5996H97.064V43.8809H105.234V43.5693C105.234 43.0029 105.131 42.4979 104.923 42.0542C104.725 41.6011 104.423 41.2424 104.017 40.978C103.611 40.7137 103.091 40.5815 102.459 40.5815C101.921 40.5815 101.458 40.6995 101.071 40.9355C100.684 41.1715 100.368 41.502 100.123 41.9268C99.8866 42.3516 99.7072 42.8519 99.5845 43.4277C99.4712 43.9941 99.4146 44.6172 99.4146 45.2969V45.8633C99.4146 46.4769 99.4995 47.0433 99.6694 47.5625C99.8488 48.0817 100.099 48.5301 100.42 48.9077C100.75 49.2853 101.147 49.578 101.609 49.7856C102.081 49.9933 102.615 50.0972 103.209 50.0972C103.946 50.0972 104.63 49.9556 105.263 49.6724C105.905 49.3797 106.457 48.9408 106.919 48.3555L108.902 50.5078C108.581 50.9704 108.142 51.4141 107.585 51.8389C107.037 52.2637 106.377 52.613 105.603 52.8867C104.828 53.151 103.946 53.2832 102.955 53.2832ZM119.833 49.5449V42.7197C119.833 42.2288 119.753 41.8088 119.593 41.4595C119.432 41.1007 119.182 40.8223 118.842 40.624C118.512 40.4258 118.082 40.3267 117.554 40.3267C117.101 40.3267 116.709 40.4069 116.378 40.5674C116.048 40.7184 115.793 40.9403 115.614 41.2329C115.434 41.5161 115.345 41.8512 115.345 42.2383H111.267C111.267 41.5869 111.418 40.9686 111.72 40.3833C112.022 39.798 112.461 39.2835 113.037 38.8398C113.612 38.3867 114.297 38.0327 115.09 37.7778C115.892 37.5229 116.789 37.3955 117.78 37.3955C118.97 37.3955 120.027 37.5938 120.952 37.9902C121.877 38.3867 122.604 38.9814 123.133 39.7744C123.671 40.5674 123.94 41.5586 123.94 42.748V49.3042C123.94 50.1444 123.992 50.8335 124.096 51.3716C124.2 51.9002 124.351 52.3628 124.549 52.7593V53H120.428C120.23 52.5846 120.079 52.0654 119.975 51.4424C119.881 50.8099 119.833 50.1774 119.833 49.5449ZM120.372 43.6685L120.4 45.9766H118.12C117.582 45.9766 117.115 46.0379 116.718 46.1606C116.322 46.2834 115.996 46.458 115.741 46.6846C115.486 46.9017 115.298 47.1566 115.175 47.4492C115.062 47.7419 115.005 48.0628 115.005 48.4121C115.005 48.7614 115.085 49.0776 115.246 49.3608C115.406 49.6346 115.637 49.8517 115.939 50.0122C116.242 50.1632 116.596 50.2388 117.001 50.2388C117.615 50.2388 118.148 50.116 118.602 49.8706C119.055 49.6252 119.404 49.3231 119.649 48.9644C119.904 48.6056 120.036 48.2658 120.046 47.9448L121.122 49.6724C120.971 50.0594 120.763 50.4606 120.499 50.876C120.244 51.2913 119.918 51.6831 119.522 52.0513C119.125 52.41 118.649 52.7074 118.092 52.9434C117.535 53.1699 116.874 53.2832 116.109 53.2832C115.137 53.2832 114.254 53.0897 113.461 52.7026C112.678 52.3062 112.055 51.7633 111.592 51.0742C111.139 50.3757 110.913 49.5827 110.913 48.6953C110.913 47.8929 111.064 47.1802 111.366 46.5571C111.668 45.9341 112.111 45.4102 112.697 44.9854C113.292 44.5511 114.033 44.2254 114.92 44.0083C115.807 43.7817 116.836 43.6685 118.007 43.6685H120.372ZM131.162 41.0205V53H127.083V37.6787H130.921L131.162 41.0205ZM135.778 37.5796L135.707 41.3604C135.509 41.332 135.268 41.3084 134.985 41.2896C134.711 41.2612 134.461 41.2471 134.234 41.2471C133.659 41.2471 133.158 41.3226 132.733 41.4736C132.318 41.6152 131.969 41.8276 131.686 42.1108C131.412 42.394 131.204 42.7386 131.062 43.1445C130.93 43.5505 130.855 44.013 130.836 44.5322L130.015 44.2773C130.015 43.2861 130.114 42.3752 130.312 41.5444C130.51 40.7043 130.798 39.9727 131.176 39.3496C131.563 38.7266 132.035 38.2451 132.592 37.9053C133.149 37.5654 133.786 37.3955 134.503 37.3955C134.73 37.3955 134.961 37.4144 135.197 37.4521C135.433 37.4805 135.627 37.5229 135.778 37.5796ZM158.434 49.6865V53H148.055V49.6865H158.434ZM149.428 32.3828V53H145.18V32.3828H149.428ZM164.919 37.6787V53H160.827V37.6787H164.919ZM160.572 33.6855C160.572 33.0908 160.78 32.5999 161.195 32.2129C161.611 31.8258 162.168 31.6323 162.866 31.6323C163.555 31.6323 164.108 31.8258 164.523 32.2129C164.948 32.5999 165.16 33.0908 165.16 33.6855C165.16 34.2803 164.948 34.7712 164.523 35.1582C164.108 35.5452 163.555 35.7388 162.866 35.7388C162.168 35.7388 161.611 35.5452 161.195 35.1582C160.78 34.7712 160.572 34.2803 160.572 33.6855ZM172.283 40.9497V53H168.205V37.6787H172.028L172.283 40.9497ZM171.688 44.8013H170.583C170.583 43.6685 170.73 42.6489 171.022 41.7427C171.315 40.827 171.726 40.0482 172.254 39.4062C172.783 38.7549 173.411 38.2593 174.138 37.9194C174.874 37.5701 175.695 37.3955 176.602 37.3955C177.319 37.3955 177.975 37.4993 178.57 37.707C179.165 37.9147 179.674 38.2451 180.099 38.6982C180.533 39.1514 180.864 39.7508 181.09 40.4966C181.326 41.2424 181.444 42.1533 181.444 43.2295V53H177.338V43.2153C177.338 42.5356 177.243 42.007 177.055 41.6294C176.866 41.2518 176.587 40.9875 176.219 40.8364C175.861 40.6759 175.417 40.5957 174.888 40.5957C174.341 40.5957 173.864 40.7043 173.458 40.9214C173.062 41.1385 172.731 41.4406 172.467 41.8276C172.212 42.2052 172.018 42.6489 171.886 43.1587C171.754 43.6685 171.688 44.216 171.688 44.8013ZM188.624 31.2358V53H184.545V31.2358H188.624ZM198.281 37.6787L191.625 45.2686L188.057 48.8794L186.57 45.9341L189.402 42.3374L193.381 37.6787H198.281ZM194.047 53L189.516 45.9199L192.333 43.4561L198.748 53H194.047Z" fill="#6B6A6A"/>
          <path d="M28.3935 3.5677C27.7266 9.9381 27.7266 9.88412 24.7256 10.9638L22.0025 11.9356L15.5559 9.18229C11.9992 7.67067 8.99821 6.42898 8.88706 6.42898C8.22018 6.42898 2.49606 14.7429 2.71836 15.3907C2.88508 15.8226 4.83017 18.8999 7.05312 22.193L11.11 28.2935L10.8322 31.7486L10.5543 35.2578L5.55263 38.1191C2.8295 39.6847 0.328676 41.0343 0.0508064 41.1423C-0.227063 41.2503 0.66212 44.5434 2.05147 48.5384L4.49672 55.7726L7.55329 56.9603C9.22051 57.5542 12.4438 58.7419 14.8335 59.5517C18.8348 60.9553 19.2238 61.2253 21.8914 64.7344L24.7256 68.4055V75.0998V81.7401L30.4498 85.3572C33.6175 87.4087 36.3962 89.0283 36.674 89.0283C37.0075 88.9743 39.1749 87.5707 41.6201 85.8431L46.0105 82.7659L49.2893 83.6297C52.457 84.4395 52.7905 84.7094 56.5139 89.3522C59.0148 92.4295 60.7376 94.1031 61.3489 93.9951C61.849 93.8871 63.9053 93.3472 65.9059 92.7534L69.6294 91.7276L70.0184 86.1131C70.4074 80.7144 70.463 80.4445 72.1858 78.8249L74.0197 77.0973L78.0211 78.0151C80.244 78.501 82.2447 78.6629 82.5226 78.447C82.7448 78.177 83.4673 76.3415 84.1342 74.344C85.5235 70.295 85.5791 70.6729 81.7445 64.4645L79.855 61.3872L78.9102 64.1405C77.7432 67.5417 73.9086 71.8066 70.5742 73.3183C62.6826 76.9353 51.9013 74.0201 43.0095 65.9221C37.8411 61.2253 34.2288 56.0966 31.6168 49.9961C29.5606 45.0833 28.3379 38.6589 28.8381 35.6357C29.0604 34.5559 29.1716 33.2063 29.1716 32.6124C29.2271 27.8616 34.3955 21.2753 39.5083 19.4397C47.1775 16.6324 57.4031 19.4937 65.7948 26.7819L69.3515 29.9131L69.0181 25.3243L68.6291 20.7354L64.5166 16.7404L60.4041 12.7454L56.7918 14.0411L53.1239 15.2828L50.7342 14.0411C47.2887 12.1516 47.2331 12.0976 43.5096 6.86087C41.6757 4.21553 39.8973 1.9481 39.5639 1.73215C38.8414 1.30026 31.728 0.00458527 29.9496 0.00458527C28.8937 -0.0494003 28.727 0.328506 28.3935 3.5677ZM45.0101 13.4472C46.1216 13.7172 45.1769 13.8251 41.9536 13.8791C33.4507 13.9331 27.5043 17.2803 24.2255 23.8666C19.9463 32.4505 20.8355 43.1938 26.6707 54.7469C35.118 71.3747 52.2903 81.8481 66.684 79.1488C68.5735 78.8249 68.7402 78.8249 67.7954 79.4187C67.1841 79.7966 64.3499 80.1745 61.5156 80.2825C56.9585 80.4985 55.7359 80.3365 51.5679 79.0408C36.674 74.29 23.5586 59.1198 20.0574 42.492C17.0564 28.4555 22.4471 17.1183 33.7842 13.7172C36.285 12.9074 42.287 12.7994 45.0101 13.4472ZM48.4557 14.311C48.289 14.473 47.7888 14.527 47.3998 14.365C46.9552 14.203 47.1219 14.0411 47.7333 14.0411C48.3446 13.9871 48.678 14.149 48.4557 14.311Z" fill="#8400FF"/>
        </svg>

        <button
          type="button"
          onClick={toggleSidebar}
          className={`absolute transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all duration-300 ${isOpen ? 'rotate-0 top-1/2 right-2' : 'rotate-180 top-1/2 left-2'}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 p-4 space-y-1">
        <ul className="space-y-4">
          {SIDEBAR_ITEMS.map((item, index) => (
            <li key={index} >
              <a
                href="#"
                // Set active tab on click
                className={`relative flex items-center px-3 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-purple_button hover:text-white ${isOpen ? 'justify-start' : 'justify-center'} text-gray-700`}
                onClick={() => setActiveTab(item.name)} // Set active tab on click
                onMouseEnter={(e) => {
                  const icon = e.currentTarget.querySelector('svg');
                  const text = e.currentTarget.querySelector('span');
                  if (icon) icon.style.color = 'white';
                  if (text) text.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  const icon = e.currentTarget.querySelector('svg');
                  const text = e.currentTarget.querySelector('span');
                  if (icon) icon.style.color = '';
                  if (text) text.style.color = '';
                }}
                >
                <item.icon size={24} className="text-purple_logo transition-colors duration-300" />
                {/* Tooltip when sidebar is collapsed */}
                {!isOpen && (
                  <span className="absolute left-full ml-4 whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {item.name}
                  </span>
                )}

                {/* Display item name when sidebar is open */}
                {isOpen && (
                  <span className="ml-4 font-semibold text-black ">
                    {item.name}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <footer className="p-4 text-center">
        {isOpen && (
          <p className="text-sm text-gray-500">
            © 2024 Your Brand
          </p>
        )}
      </footer>
    </aside>
  );
};
