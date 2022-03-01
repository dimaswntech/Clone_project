<template>
    <footer class="footer w-full container-xl p-responsive">
        <div
            class="
                relative
                flex
                items-center
                pd-2
                text-sm
                color-fg-muted
                border-t
                color-border-muted
                flex-col-reverse
                lg:flex-row
                flex-wrap
                lg:flex-nowrap
                mt-10
                pt-10
            "
        >
            <ul
                class="
                    list-none
                    flex flex-wrap
                    col-0 col-lg-2
                    justify-start
                    lg:justify-between
                    mb-2
                    lg:mb-0
                "
            >
                <li class="mt-2 lg:mt-0 flex items-center">
                    <router-link to="" class="footer-octicon mr-2">
                        <svg
                            aria-hidden="true"
                            height="24"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="24"
                            data-view-component="true"
                            class="octicon octicon-mark-github"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                            ></path>
                        </svg>
                        <span> © 2022 GitHub, Inc. </span>
                    </router-link>
                </li>
            </ul>
            <ul
                class="
                    list-none
                    flex flex-wrap
                    col-12 col-lg-8
                    justify-center
                    lg:justify-between
                    mb-2
                    lg:first-letter:mb-0
                "
            >
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">Terms</router-link>
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">Privacy</router-link>
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer"
                        >Security</router-link
                    >
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">Status</router-link>
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">Docs</router-link>
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer"
                        >Contact Github</router-link
                    >
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">Pricing</router-link>
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">API</router-link>
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer"
                        >Training</router-link
                    >
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">Blog</router-link>
                </li>
                <li>
                    <router-link to="" class="link-footer">About</router-link>
                </li>
            </ul>
        </div>
        <div class="flex justify-center pb-10">
            <span class="text-sm color-fg-muted"></span>
        </div>
    </footer>
</template>

<script>
export default {}
</script>

<style>
.footer-octicon {
    color: #6e7781;
}
.link-footer {
    color: #0969da;
}
</style>
