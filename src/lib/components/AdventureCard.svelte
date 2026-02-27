<script>
	import { Mountain, Calendar, Check } from 'lucide-svelte';
	let { image, location, duration, title, price, difficulty, amenities = [] } = $props();
</script>

<div class="card-wrapper">
    <div class="image">
        <img src={image} alt={title}>
    </div>

    <div class="details">
        <div class="location-tag">
            <div>
                <Mountain size="16" color="white" /> <p>{location}</p> 
            </div>
            <div>
                <Calendar size="16" color="white" /> <p>{duration}</p>  
            </div>
        </div>

        <div class="heading">
            <h3>{title} <span>{price}</span></h3>
        </div>

        <div class="difficulty-pill">
            <p>{difficulty}</p>
        </div>

        <div class="amenities">
            {#each amenities as item }
            <p><Check size="16" color="rgb(236, 19, 19)" /> {item}</p>
            {/each}
        </div>

        <div class="button">
            <button>Book This Trek</button>
        </div>

    </div>
</div>

<style>
.card-wrapper{
    width:100%;
    display: flex;
    flex-direction: column;
    background-color: hsl(0, 0%, 5%);
    border: 1px solid rgb(51, 51, 51);
    border-radius:1.5rem;
    overflow: hidden;
    height:650px;

    .image{
     display: flex;   
     background-color: white;
     height:40%;
     img{
        width:100%;
        height:100%;
        object-fit: cover;
     }  
    }

    .details{
        width:100%;
        display: flex;
        flex-direction: column;
        padding: 1.5rem;

        .location-tag{
            display: flex;
            gap: 1.5rem;
            margin-bottom: 1rem;

            div{
                display: flex;
                align-items: center;
                gap: 0.5rem;

                p{
                    color: rgb(166, 166, 166);
                    font-size: 0.75rem;
                }
            }
        }

        .heading{
            margin-bottom:1.5rem;
            h3{
                font-size: 1.5rem;
                color: rgb(255, 255, 255);
                letter-spacing: -0.6px;
                line-height: 32px;
                font-weight: 300;
                

                span{
                    color:rgb(236, 19, 19);
                    font-weight: 600;
                    font-size: 1.5rem;
                }
            }
            
        }

        .difficulty-pill{
            width:max-content;
            background-color: rgb(26, 26, 26);
            padding:0.25rem 0.75rem ;
            border-radius:9999px ;
            margin-bottom:1.5rem ;

            p{
                color: rgb(255, 255, 255);
                font-size: 0.75rem;
            }
        }

        .amenities{
            display:flex;
            flex-direction: column;
            gap:0.5rem ;
            margin-top:1.5rem ;
            margin-bottom:1.5rem;

            p{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: rgb(166, 166, 166);
                font-size: 0.875rem;
                line-height: 20px;
            }
        }

        .button{
            button{
                width:100%;
                padding:0.75rem ;
                background-color:transparent;
                color:white ;
                border:1px solid rgb(51, 51, 51);
                border-radius:16px ;
                cursor:pointer ;
                font-weight:500 ;
                transition-duration:200ms ;

                &:hover{
                    background-color:hsl(0, 100%, 40%);
                }
            }
        }

    
    }
}
    
</style>