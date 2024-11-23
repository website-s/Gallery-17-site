<template>
    <div ref="menu" @click="menuClick" class="menu"></div>
    <div ref="nav" class="navigation">
        <div ref="links" class="main-links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/creators">Creators</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </div>
        <div ref="logo" class="logo-nav">
            <RouterLink to="/"><svg width="332" height="106" viewBox="0 0 332 106" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M57.0062 68.2351C55.4048 68.8609 53.569 69.3694 51.4989 69.7605C49.4678 70.1125 47.3391 70.2886 45.1128 70.2886C41.8709 70.2886 39.0782 69.6432 36.7347 68.3524C34.4302 67.0225 32.6335 65.0668 31.3446 62.4852C30.0947 59.9037 29.4697 56.7159 29.4697 52.9218C29.4697 49.4406 30.1142 46.4092 31.4031 43.8277C32.6921 41.207 34.5864 39.1731 37.0862 37.7258C39.625 36.2395 42.7302 35.4963 46.4017 35.4963C48.3156 35.4963 50.1318 35.6919 51.8504 36.083C53.6081 36.4351 55.1704 36.9435 56.5375 37.6085L54.2525 42.8889C53.0417 42.2631 51.7723 41.7937 50.4443 41.4808C49.1554 41.1679 47.7883 41.0114 46.3431 41.0114C44.1949 41.0114 42.3982 41.5199 40.953 42.5369C39.5469 43.5539 38.4923 44.962 37.7893 46.7613C37.0862 48.5214 36.7347 50.5749 36.7347 52.9218C36.7347 56.7159 37.4963 59.6494 39.0196 61.7225C40.582 63.7565 42.8278 64.7734 45.7573 64.7734C46.5384 64.7734 47.3587 64.7148 48.218 64.5974C49.0773 64.4801 49.7803 64.3236 50.3271 64.128V56.3834H43.7067V51.0443H57.0062V68.2351ZM62.0645 69.8192L73.4892 35.8483H82.2189L93.585 69.8192H85.9685L83.5078 61.3705H72.2003L69.7396 69.8192H62.0645ZM79.5238 47.7C79.3676 47.1133 79.1723 46.4288 78.9379 45.6465C78.7426 44.8642 78.5473 44.0819 78.352 43.2996C78.1567 42.4782 77.981 41.7351 77.8247 41.0701C77.7076 41.7351 77.5513 42.4782 77.356 43.2996C77.1607 44.0819 76.9655 44.8642 76.7702 45.6465C76.5749 46.4288 76.3991 47.1133 76.2429 47.7L73.8407 55.8553H81.9259L79.5238 47.7ZM106.245 35.9657V64.3627H119.486V69.8192H99.1559V35.9657H106.245ZM133.692 35.9657V64.3627H146.933V69.8192H126.603V35.9657H133.692ZM154.05 35.9657H172.916V41.3048H161.14V49.5775H172.154V54.9166H161.14V64.4214H172.916V69.8192H154.05V35.9657ZM190.887 35.9657C195.222 35.9657 198.464 36.8066 200.612 38.4886C202.799 40.1314 203.893 42.576 203.893 45.8225C203.893 48.0129 203.365 49.8708 202.311 51.3963C201.256 52.9218 199.733 54.0952 197.741 54.9166L206.822 69.8192H198.971L191.766 56.6181H187.957V69.8192H180.868V35.9657H190.887ZM190.887 51.3963C192.683 51.3963 194.109 50.9856 195.164 50.1642C196.218 49.3037 196.745 47.9738 196.745 46.1745C196.745 44.4144 196.237 43.1432 195.222 42.3609C194.246 41.5786 192.762 41.1875 190.77 41.1875H187.957V51.3963H190.887ZM237.274 35.9657L226.553 56.6767V69.8192H219.405V56.9114L208.683 35.9657H216.358L222.979 50.6923L229.658 35.9657H237.274Z" fill="white"/><path d="M268.783 69.8192H260.874V52.7458C260.874 51.807 260.874 50.8878 260.874 49.9882C260.913 49.0495 260.952 48.1694 260.991 47.348C261.069 46.4875 261.128 45.6856 261.167 44.9424C260.776 45.4118 260.308 45.9007 259.761 46.4092C259.214 46.9177 258.628 47.4262 258.003 47.9347L253.199 51.8657L249.449 47.1133L262.163 37.3738H268.783V69.8192ZM280.651 79.148L295.064 44.2971H276.199V38.0192H303.559V42.5369L288.854 79.148H280.651Z" fill="white"/></svg></RouterLink>
        </div>
        <div ref="picto" class="picto-links">
            <RouterLink to="/"><svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.375 0.875C4.86914 0.875 5.31836 1.2793 5.4082 1.77344L5.49805 2.3125H24.3652C25.3086 2.3125 26.0273 3.25586 25.7578 4.1543L23.332 12.7793C23.1523 13.4082 22.6133 13.8125 21.9395 13.8125H7.69922L8.10352 15.9688H21.9844C22.5684 15.9688 23.0625 16.4629 23.0625 17.0469C23.0625 17.6758 22.5684 18.125 21.9844 18.125H7.20508C6.71094 18.125 6.26172 17.7656 6.17188 17.2715L3.47656 3.03125H1.14062C0.511719 3.03125 0.0625 2.58203 0.0625 1.95312C0.0625 1.36914 0.511719 0.875 1.14062 0.875H4.375ZM5.8125 21.7188C5.8125 20.5508 6.75586 19.5625 7.96875 19.5625C9.13672 19.5625 10.125 20.5508 10.125 21.7188C10.125 22.9316 9.13672 23.875 7.96875 23.875C6.75586 23.875 5.8125 22.9316 5.8125 21.7188ZM23.0625 21.7188C23.0625 22.9316 22.0742 23.875 20.9062 23.875C19.6934 23.875 18.75 22.9316 18.75 21.7188C18.75 20.5508 19.6934 19.5625 20.9062 19.5625C22.0742 19.5625 23.0625 20.5508 23.0625 21.7188Z" fill="white"/></svg></RouterLink>
            <RouterLink to="/"><svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 12.375C7.31055 12.375 4.75 9.81445 4.75 6.625C4.75 3.48047 7.31055 0.875 10.5 0.875C13.6445 0.875 16.25 3.48047 16.25 6.625C16.25 9.81445 13.6445 12.375 10.5 12.375ZM12.7461 14.5312C17.0586 14.5312 20.5625 18.0352 20.5625 22.3477C20.5625 23.2012 19.8438 23.875 18.9902 23.875H1.96484C1.11133 23.875 0.4375 23.2012 0.4375 22.3477C0.4375 18.0352 3.89648 14.5312 8.20898 14.5312H12.7461Z" fill="white"/></svg></RouterLink>
        </div>
    </div>
    <div @click="navCLose" ref="navClick" class="navigation-click-container">
        <div class="navigation-click">
            <div class="logo-nav-click">
                <RouterLink to="/"><svg width="332" height="106" viewBox="0 0 332 106" xmlns="http://www.w3.org/2000/svg"><path d="M57.0062 68.2351C55.4048 68.8609 53.569 69.3694 51.4989 69.7605C49.4678 70.1125 47.3391 70.2886 45.1128 70.2886C41.8709 70.2886 39.0782 69.6432 36.7347 68.3524C34.4302 67.0225 32.6335 65.0668 31.3446 62.4852C30.0947 59.9037 29.4697 56.7159 29.4697 52.9218C29.4697 49.4406 30.1142 46.4092 31.4031 43.8277C32.6921 41.207 34.5864 39.1731 37.0862 37.7258C39.625 36.2395 42.7302 35.4963 46.4017 35.4963C48.3156 35.4963 50.1318 35.6919 51.8504 36.083C53.6081 36.4351 55.1704 36.9435 56.5375 37.6085L54.2525 42.8889C53.0417 42.2631 51.7723 41.7937 50.4443 41.4808C49.1554 41.1679 47.7883 41.0114 46.3431 41.0114C44.1949 41.0114 42.3982 41.5199 40.953 42.5369C39.5469 43.5539 38.4923 44.962 37.7893 46.7613C37.0862 48.5214 36.7347 50.5749 36.7347 52.9218C36.7347 56.7159 37.4963 59.6494 39.0196 61.7225C40.582 63.7565 42.8278 64.7734 45.7573 64.7734C46.5384 64.7734 47.3587 64.7148 48.218 64.5974C49.0773 64.4801 49.7803 64.3236 50.3271 64.128V56.3834H43.7067V51.0443H57.0062V68.2351ZM62.0645 69.8192L73.4892 35.8483H82.2189L93.585 69.8192H85.9685L83.5078 61.3705H72.2003L69.7396 69.8192H62.0645ZM79.5238 47.7C79.3676 47.1133 79.1723 46.4288 78.9379 45.6465C78.7426 44.8642 78.5473 44.0819 78.352 43.2996C78.1567 42.4782 77.981 41.7351 77.8247 41.0701C77.7076 41.7351 77.5513 42.4782 77.356 43.2996C77.1607 44.0819 76.9655 44.8642 76.7702 45.6465C76.5749 46.4288 76.3991 47.1133 76.2429 47.7L73.8407 55.8553H81.9259L79.5238 47.7ZM106.245 35.9657V64.3627H119.486V69.8192H99.1559V35.9657H106.245ZM133.692 35.9657V64.3627H146.933V69.8192H126.603V35.9657H133.692ZM154.05 35.9657H172.916V41.3048H161.14V49.5775H172.154V54.9166H161.14V64.4214H172.916V69.8192H154.05V35.9657ZM190.887 35.9657C195.222 35.9657 198.464 36.8066 200.612 38.4886C202.799 40.1314 203.893 42.576 203.893 45.8225C203.893 48.0129 203.365 49.8708 202.311 51.3963C201.256 52.9218 199.733 54.0952 197.741 54.9166L206.822 69.8192H198.971L191.766 56.6181H187.957V69.8192H180.868V35.9657H190.887ZM190.887 51.3963C192.683 51.3963 194.109 50.9856 195.164 50.1642C196.218 49.3037 196.745 47.9738 196.745 46.1745C196.745 44.4144 196.237 43.1432 195.222 42.3609C194.246 41.5786 192.762 41.1875 190.77 41.1875H187.957V51.3963H190.887ZM237.274 35.9657L226.553 56.6767V69.8192H219.405V56.9114L208.683 35.9657H216.358L222.979 50.6923L229.658 35.9657H237.274Z"/><path d="M268.783 69.8192H260.874V52.7458C260.874 51.807 260.874 50.8878 260.874 49.9882C260.913 49.0495 260.952 48.1694 260.991 47.348C261.069 46.4875 261.128 45.6856 261.167 44.9424C260.776 45.4118 260.308 45.9007 259.761 46.4092C259.214 46.9177 258.628 47.4262 258.003 47.9347L253.199 51.8657L249.449 47.1133L262.163 37.3738H268.783V69.8192ZM280.651 79.148L295.064 44.2971H276.199V38.0192H303.559V42.5369L288.854 79.148H280.651Z"/></svg></RouterLink>
            </div>
            <div class="main-links-click">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/creators">Creators</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
            </div>
            <div class="picto-links-click">
                <RouterLink to="/"><svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.375 0.875C4.86914 0.875 5.31836 1.2793 5.4082 1.77344L5.49805 2.3125H24.3652C25.3086 2.3125 26.0273 3.25586 25.7578 4.1543L23.332 12.7793C23.1523 13.4082 22.6133 13.8125 21.9395 13.8125H7.69922L8.10352 15.9688H21.9844C22.5684 15.9688 23.0625 16.4629 23.0625 17.0469C23.0625 17.6758 22.5684 18.125 21.9844 18.125H7.20508C6.71094 18.125 6.26172 17.7656 6.17188 17.2715L3.47656 3.03125H1.14062C0.511719 3.03125 0.0625 2.58203 0.0625 1.95312C0.0625 1.36914 0.511719 0.875 1.14062 0.875H4.375ZM5.8125 21.7188C5.8125 20.5508 6.75586 19.5625 7.96875 19.5625C9.13672 19.5625 10.125 20.5508 10.125 21.7188C10.125 22.9316 9.13672 23.875 7.96875 23.875C6.75586 23.875 5.8125 22.9316 5.8125 21.7188ZM23.0625 21.7188C23.0625 22.9316 22.0742 23.875 20.9062 23.875C19.6934 23.875 18.75 22.9316 18.75 21.7188C18.75 20.5508 19.6934 19.5625 20.9062 19.5625C22.0742 19.5625 23.0625 20.5508 23.0625 21.7188Z"/></svg></RouterLink>
                <RouterLink to="/"><svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 12.375C7.31055 12.375 4.75 9.81445 4.75 6.625C4.75 3.48047 7.31055 0.875 10.5 0.875C13.6445 0.875 16.25 3.48047 16.25 6.625C16.25 9.81445 13.6445 12.375 10.5 12.375ZM12.7461 14.5312C17.0586 14.5312 20.5625 18.0352 20.5625 22.3477C20.5625 23.2012 19.8438 23.875 18.9902 23.875H1.96484C1.11133 23.875 0.4375 23.2012 0.4375 22.3477C0.4375 18.0352 3.89648 14.5312 8.20898 14.5312H12.7461Z"/></svg></RouterLink>
            </div>
        </div> 
        <div class="closer"></div>
    </div>
</template>
<script setup>
import gsap from 'gsap';
import { ref, onMounted, onUnmounted} from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const nav = ref(null);
const links = ref(null);
const logo = ref(null);
const picto = ref(null);
const menu = ref(null);
const navClick = ref(null);

const menuClick = () => {
        gsap.to(navClick.value, { left: '0vh', duration: 0.5 });
    };
    
const navCLose = () => {
    gsap.to(navClick.value, { left: '-120vw', duration: 0.5 });
};

let observer;
let animation;

onMounted(() => {

    console.log(menu.value);
    

    const timeline1 = gsap.timeline();
    
    timeline1.fromTo(links.value, 
        { y: -80, opacity: 0 },
        { y: 0, duration: 1, opacity: 1, ease: 'power4.out' }
    );
    timeline1.fromTo(logo.value, 
        { y: -80, opacity: 0 },
        { y: 0, duration: 1, opacity: 1, ease: 'power4.out' }, 
        "<+=0.2"
    );
    timeline1.fromTo(picto.value, 
        { y: -80, opacity: 0 },
        { y: 0, duration: 1, opacity: 1, ease: 'power4.out' }, 
        "<+=0.4"
    );

    animation = gsap.fromTo(
        menu.value,
        { y: -40, opacity: 0 }, // État initial
        { y: 0, opacity: 1, duration: 0.5, ease: 'power1.out', paused: true } // État final (animation en pause)
    );

    observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) {
                console.log('lancement');
                animation.play(); // Play timeline2 when .navigation leaves the viewport
            } else {
                animation.reverse(); // Reverse timeline2 when .navigation re-enters
                console.log('retour');
            }
        },
        { threshold: 0.1 } // Adjust threshold to fit your animation trigger point
    );

    observer.observe(nav.value);
});

onUnmounted(() => {
    if (observer) observer.disconnect(); // Clean up the observer
});
</script>
<script>
    export default {
        name: 'NavigationDesktop',
    }
</script>
<style scoped>

    .menu {
        border-radius: 100%;
        height: 1.5rem;
        aspect-ratio: 1/1;
        background: linear-gradient(180deg, #F3B3A6 0%, #B56576 100%);
        background-size: 100% 130%;
        transition: background-position .3s ease;
        z-index: 7;
        position: fixed;
        top: 2rem;
        left: 2rem;
        opacity: 1;
    }

    .menu:hover {
        background-position: 0 25%;
    }

    .navigation-click-container {
        position: fixed;
        top: 0;
        left: -120vw;
        height: 100vh;
        width: 100%;
        display: flex;
        z-index: 8;
    }

    .closer {
        height: 100%;
        width: 100%;
    }

    .navigation-click {
        background-color: #fff;
        color: #000;
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .navigation-click a {
        margin-bottom: .3rem;
    }

    .navigation-click a:hover {
        color: #00000065;
    }

    .main-links-click {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 75%;
        margin-bottom: 3rem;
    }

    .logo-nav-click {
        max-width: 75%;
        margin-bottom: 3rem;
    }

    .logo-nav-click svg {
        max-width: 100%;
    }

    .picto-links-click {
        display: flex;
        justify-content: center;
        width: 75%;
    }

    .picto-links-click a {
        margin-right: 1.5rem;
    }
    
    .navigation-click svg {
        fill: #000;
    }
    
    .navigation-click a:hover svg{
        fill: #00000065;
    }
    
    .navigation {
        position: absolute;
        display: flex;
        align-items: center;
        width: 100%;
        height: 5rem;
        justify-content: space-between;
        z-index: 5;
        padding: 0 2rem;
    }
    
    .logo-nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .main-links, 
    .picto-links {
        z-index: 6;
        display: flex;
    }

    .picto-links a {
        margin-left: 1.5rem;
        margin-right: .5rem;
    }

    .main-links a {
        font-size: 1.12rem;
        color: #fff;
        margin-right: 2rem;
        font-weight: 578;
        letter-spacing: 0.01em;
        font-variant: all-small-caps;
        font-feature-settings: 'pnum' on, 'onum' on;
        font-stretch: 100;
        font-variation-settings: 'CTGR' 100;
        transition: all 0.3s ease;
    }

    .main-links a:hover {
        color: #ffffffb0;
    }


    a {
        background: none;
    }
</style>