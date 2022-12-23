import React from "react";

class index extends React.Component {
    render() { 
        return (
            <div>
                <nav class="sm:justify-between flex items-center xl:flex-col">
                    <div class="p-5 text-center">
                        <span class="text-7xl text-white">Ambrosia</span>
                    </div>
                    <div>
                        <a href="Signin.html" class="text-2xl mr-2 text-white hover:text-black duration-500">Sign in</a>
                        <a href="Sign up.html" class="text-2xl text-black bg-neutral-50 rounded-lg p-1 hover:text-white duration-500 hover:bg-neutral-600 duration-500">Sign up</a>
                    </div>
                </nav>
                <div id="one" class="sm:text-center xl:" />
                <span class="text-3xl text-white">Food,Appetites And More,</span><br />
                <span class="text-3xl text-white">Delivered To Your House</span><br /><br />
                <input class="rounded-lg px-20" type="text" placeholder="Enter delivery address" /><br />
                <p class="text-white underline underline-offset-2">Sign in for saved address</p>
            <div />
            </div>
        )
    }
}

export default index;