<script>
import {Facebook, Instagram, Twitter,Youtube} from 'lucide-svelte'
const socials = 
[Facebook, Instagram, Twitter, Youtube]
</script>

<div class="container">
    <div class="heading">
        <h2>AMAS <span>Kerala</span></h2>
    </div>
    <div class="menu">
        <div class="links">
			<a href="#adventures">Treks</a>
			<a href="#whyus">Services</a>
			<a href="#aboutus">About</a>
			<a href="#contact">Contact</a>
			<a href="#">Privacy</a>
			<a href="#">Terms</a>
		</div>
    </div>

    <div class="socials">
        {#each socials as Icons}
        <div>
            <Icons size={18} color="rgb(166, 166, 166)"/>
        </div>
        {/each}
    </div>

    <hr>

    <div class="cp">
        <p>© 2026 Amas Kerala. All rights reserved.</p>
    </div>
</div>

<style>
.container{
    width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgb(0, 0, 0);
	padding: 3rem 1.5rem;
	font-family: inter, sans-serif;
    gap: 2rem;

    .heading{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        h2{
            font-size: 1.25rem;
            font-weight: 700;
            letter-spacing: -0.5px;
            line-height: 28px;
            color: rgb(255, 255, 255);
        }

        span{
            color: rgb(236, 19, 19);
            font-weight: 300;
        }
    }

    .menu{
       width: 100%;
       display: flex;
       justify-content: center;

       .links{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        
        a{
        color:rgb(166, 166, 166);
        font-size: 0.875rem;
        line-height: 24px;
        text-decoration: none;
        }
       }
    }

    .socials{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 1rem;

        div{
            width: 2.5rem;
            height:2.5rem;
            background-color: rgb(26, 26, 26);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius:1rem;
        }
    }

    hr{
        width: 100%;
        border:thin solid rgb(26, 26, 26);
    }

    .cp{
        p{
            color:rgb(166, 166, 166);
            font-size: 0.875rem;
            line-height: 20px;
        }
    }

    

}

</style>