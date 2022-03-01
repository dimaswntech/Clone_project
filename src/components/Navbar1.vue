<template>
    <div
        class="
            Header
            flex
            text-gray-100
            py-4
            px-4
            lg:px-8
            md:px-6
            shadow
            md:flex-nowrap
            flex-wrap
            justify-between
        "
    >
        <div class="Header-item flex mr-4 -mt-1 -mb-1 md:flex">
            <router-link to="/">
                <svg
                    height="32"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="32"
                    fill="white"
                    data-view-component="true"
                    class="octicon octicon-mark-github v-align-middle"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                </svg>
            </router-link>
        </div>
        <div
            class="
                Header-item Header-item--full
                flex-col
                md:flex-row
                w-full
                -order-2
                md:order-none
                mr-0
                md:mr-4
                mt-4
                md:mt-0 md:flex
            "
        >
            <div
                class="
                    header-search
                    flex-auto
                    relative
                    self-stretch
                    md:self-auto
                    mb-4
                    md:mb-0
                    mr-0
                    md:mr-3
                "
            >
                <div class="relative">
                    <form action="">
                        <label
                            for=""
                            class="
                                form-control
                                flex
                                p-0
                                relative
                                items-center
                                justify-between
                                input-sm
                                header-search-wrapper
                                focus
                            "
                        >
                            <input
                                placeholder="Search or jump too..."
                                type="text"
                                @focus="magic_flag = !magic_flag"
                                class="
                                    form-control
                                    header-search-input
                                    input-sm
                                    jump-to-field
                                    jump-to-field-active
                                    jump-to-dropdown-visible
                                "
                                v-model="repoInput"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="20"
                                aria-hidden="true"
                                class="mr-1 header-search-key-slash"
                            >
                                <path
                                    fill="none"
                                    stroke="#979A9C"
                                    opacity=".4"
                                    d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
                                ></path>
                                <path
                                    fill="#979A9C"
                                    d="M11.8 6L8 15.1h-.9L10.8 6h1z"
                                ></path>
                            </svg>
                            <div
                                v-if="magic_flag"
                                class="
                                    Box
                                    absolute
                                    overflow-hidden
                                    jump-to-suggestions
                                    js-jump-to-suggestions-container
                                "
                            >
                                <ul
                                    role="listbox"
                                    id="jump-to-results"
                                    class="
                                        p-0
                                        m-0
                                        js-navigation-container
                                        jump-to-suggestions-results-container
                                        js-jump-to-suggestions-results-container
                                        js-active-navigation-container
                                    "
                                >
                                    <li
                                        v-for="(repo, index) in filteredRepo"
                                        :key="index"
                                        @click="selected(repo.name)"
                                        class="
                                            flex
                                            justify-start
                                            items-center
                                            p-0
                                            text-sm
                                            navigation-item
                                            js-navigation-item
                                            js-jump-to-suggestion
                                            navigation-focus
                                        "
                                    >
                                        <router-link
                                            to=""
                                            class="
                                                no-underline
                                                flex flex-auto
                                                items-center
                                                jump-to-suggestions-path
                                                js-jump-to-suggestion-path
                                                js-navigation-open
                                                p-2
                                            "
                                        >
                                            <div
                                                class="
                                                    jump-to-octicon
                                                    js-jump-to-octicon
                                                    flex-shrink-0
                                                    mr-2
                                                    text-center
                                                "
                                            >
                                                <svg
                                                    title="Repository"
                                                    aria-label="Repository"
                                                    role="img"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    version="1.1"
                                                    width="16"
                                                    data-view-component="true"
                                                    class="
                                                        octicon octicon-repo
                                                        js-jump-to-octicon-repo
                                                        flex-shrink-0
                                                    "
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                class="
                                                    jump-to-suggestion-name
                                                    js-jump-to-suggestion-name
                                                    flex-auto
                                                    overflow-hidden
                                                    text-left
                                                    whitespace-nowrap
                                                    css-truncate
                                                    css-truncate-target
                                                "
                                            >
                                                <span class="name-repo">{{
                                                    repo.name
                                                }}</span>
                                            </div>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </label>
                    </form>
                </div>
            </div>
            <nav class="flex flex-col md:flex-row self-stretch md:self-auto">
                <router-link
                    class="
                        Header-link
                        md:-mt-4 md:-mb-4
                        py-2
                        md:py-4
                        mr-0
                        md:mr-4
                        boder-t-1
                        md:border-t-0
                        border-slate-300
                    "
                    to="#"
                >
                    Pull
                    <span class="inline md:hidden lg:inline">request</span>s
                </router-link>
                <router-link
                    class="
                        Header-link
                        md:-mt-4 md:-mb-4
                        py-2
                        md:py-4
                        mr-0
                        md:mr-4
                        boder-t-1
                        md:border-t-0
                        border-slate-300
                    "
                    to="#"
                    >Issues</router-link
                >
                <div class="flex relative">
                    <router-link
                        class="
                            Header-link
                            flex-auto
                            md:-mt-4 md:-mb-4
                            py-2
                            md:py-4
                            mr-0
                            md:mr-4
                            boder-t-1
                            md:border-t-0
                            border-slate-300
                        "
                        to="#"
                        >Marketplace</router-link
                    >
                    <router-link
                        class="
                            Header-link
                            md:-mt-4 md:-mb-4
                            py-2
                            md:py-4
                            mr-0
                            md:mr-4
                            boder-t-1
                            md:border-t-0
                            border-slate-300
                        "
                        to="#"
                        >Explore</router-link
                    >
                </div>
            </nav>
        </div>
        <div class="Header-item mr-0 md:mr-4 -order-1 md:order-none">
            <div class="notif-bell">
                <router-link to="#" class="Header-link relative">
                    <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        fill="white"
                        data-view-component="true"
                        class="octicon octicon-bell"
                    >
                        <path
                            d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
                        ></path>
                    </svg>
                </router-link>
            </div>
        </div>
        <div class="Header-item relative hidden md:flex">
            <details class="details-overlay details-reset">
                <summary class="Header-link">
                    <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        fill="white"
                        data-view-component="true"
                        class="octicon octicon-plus"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                        ></path>
                    </svg>
                    <span class="dropdown-caret"></span>
                </summary>
                <details-menu
                    class="dropdown-menu dropdown-menu-sw"
                    role="menu"
                >
                    <router-link to="" class="dropdown-item">
                        New repository
                    </router-link>
                    <router-link to="" class="dropdown-item">
                        Import repository
                    </router-link>
                    <router-link to="" class="dropdown-item">
                        New gist
                    </router-link>
                    <router-link to="" class="dropdown-item">
                        New organization
                    </router-link>
                    <router-link to="" class="dropdown-item">
                        New project
                    </router-link>
                </details-menu>
            </details>
        </div>
        <div class="Header-item relative mr-0 hidden md:flex">
            <details class="details-overlay details-reset">
                <summary class="Header-link">
                    <img
                        src="https://avatars.githubusercontent.com/u/67653363?s=40&amp;v=4"
                        alt="@dimaswntech"
                        size="20"
                        height="20"
                        width="20"
                        data-view-component="true"
                        class="avatar avatar-small circle"
                    />
                    <span class="dropdown-caret"></span>
                </summary>
                <details-menu
                    class="dropdown-menu dropdown-menu-sw"
                    role="menu"
                    style="width: 180px"
                >
                    <div class="header-nav-current-user css-truncate">
                        <router-link
                            to=""
                            class="
                                no-underline
                                user-profile-link
                                px-4
                                pt-2
                                pb-2
                                -mb-2
                                -mt-1
                                block
                            "
                        >
                            Signed in as
                            <strong class="css-truncate-target"
                                >dimaswntech</strong
                            >
                        </router-link>
                    </div>
                    <div role="none" class="dropdown-divider"></div>
                    <div
                        class="
                            pl-4
                            pr-4
                            text-xs
                            user-status-container
                            js-user-status-context
                            lh-condensed
                        "
                    >
                        <div
                            class="
                                js-user-status-container
                                rounded-2
                                px-2
                                py-1
                                mt-2
                                border
                            "
                        >
                            <details
                                class="
                                    js-user-status-details
                                    details-reset
                                    details-overlay
                                    details-overlay-dark
                                "
                            >
                                <summary
                                    class="
                                        btn-link btn-block
                                        Link--secondary
                                        no-underline
                                        js-toggle-user-status-edit
                                        toggle-user-status-edit
                                    "
                                >
                                    <div
                                        class="flex items-center items-stretch"
                                    >
                                        <div
                                            class="
                                                text-sm
                                                lh-condensed
                                                user-status-header
                                                flex
                                                user-status-emoji-only-header
                                                rounded-full
                                            "
                                        >
                                            <div
                                                class="
                                                    user-status-emoji-container
                                                    flex-shrink-0
                                                    mr-2
                                                    flex
                                                    items-center
                                                    justify-center
                                                    lh-condensed-ultra
                                                    align-bottom
                                                "
                                            >
                                                <div>
                                                    <g-emoji
                                                        class="g-emoji"
                                                        alias="dart"
                                                        fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png"
                                                        ><img
                                                            class="emoji"
                                                            alt="dart"
                                                            height="20"
                                                            width="20"
                                                            src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png"
                                                    /></g-emoji>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="
                                                user-status-message-wrapper
                                                text-sm
                                                min-w-0
                                            "
                                        >
                                            <div
                                                class="
                                                    css-truncate
                                                    css-truncate-target
                                                    max-w-full
                                                    color-fg-default
                                                    text-left
                                                "
                                            >
                                                <span>Focusing</span>
                                            </div>
                                        </div>
                                    </div>
                                </summary>
                            </details>
                        </div>
                    </div>
                    <div role="none" class="dropdown-divider"></div>
                    <router-link to="" class="dropdown-item">
                        Your profile
                    </router-link>
                    <router-link to="" class="dropdown-item">
                        Your repository
                    </router-link>
                    <router-link to="" class="dropdown-item">
                        Your codespace
                    </router-link>
                    <router-link to="" class="dropdown-item">
                        Your project
                    </router-link>
                    <router-link to="" class="dropdown-item">
                        Your stars
                    </router-link>
                    <router-link to="" class="dropdown-item">
                        Your gists
                    </router-link>
                    <div role="none" class="dropdown-divider"></div>
                    <router-link to="" class="dropdown-item">
                        Upgrade
                    </router-link>
                    <router-link to="" class="dropdown-item">
                        Feature preview
                    </router-link>
                    <router-link to="" class="dropdown-item">
                        Help
                    </router-link>
                    <router-link to="" class="dropdown-item">
                        Settings
                    </router-link>
                    <div role="none" class="dropdown-divider"></div>
                    <router-link to="" class="dropdown-item">
                        Sign out
                    </router-link>
                </details-menu>
            </details>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
    setup() {
        const router = useRouter()
        const dataRepo = ref([])
        const repoInput = ref('')
        const magic_flag = ref(false)
        const test = ref(null)
        const dropone = ref(false)

        const detail = () => {
            route.push(`/repo/javascript`)
        }

        axios
            .get('https://api.github.com/users/dimaswntech/repos', {
                headers: {
                    Authorization:
                        'token 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',
                },
                owner: 'dimaswntech',
            })
            .then((response) => {
                dataRepo.value = response.data
            })
        const filteredRepo = computed(() => {
            const query = repoInput.value.toLowerCase()
            if (repoInput.value === '') {
                return dataRepo.value
            }
            return dataRepo.value.filter((repo) => {
                return Object.values(repo).some((word) =>
                    String(word).toLowerCase().includes(query)
                )
            })
        })
        console.log(dataRepo.value)
        const selected = (data) => {
            test.value = data
            router.push({ path: `/repo/${test.value}` })
        }
        console.log(test.value)
        return {
            dataRepo,
            repoInput,
            filteredRepo,
            magic_flag,
            test,
            dropone,
            detail,
            selected,
        }
    },
}
</script>

<style scoped>
* {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    box-sizing: border-box;
}
.Header {
    background: #24292f;
    z-index: 32;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.7);
    align-items: center;
    flex-wrap: nowrap;
}
.Header-item {
    display: flex;
    margin-right: 16px;
    align-self: stretch;
    align-items: center;
    flex-wrap: nowrap;
}
.Header-item--full {
    flex: auto;
}
.Header-link {
    font-weight: 600;
    color: #ffffff;
    white-space: nowrap;
}
.dropdown-caret {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: '';
    border-style: solid;
    border-width: 4px 4px 0;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
}
.details-reset > summary {
    list-style: none;
}
details summary {
    cursor: pointer;
}
summary {
    display: list-item;
}
.octicon {
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    /* fill: currentColor; */
}
.avatar {
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    background-color: #ffffff;
    border-radius: 6px;
    flex-shrink: 0;
    box-shadow: rgba(27, 31, 36, 0.15);
}
.circle {
    border-radius: 50% !important;
}
/* .input-sm {
    min-height: 28px;
} */
.header-search {
    max-width: 100%;
    max-width: 296px;
    transition: 0.2s ease-in-out;
    transition-property: max-width, padding-bottom, padding-top;
}

.header-search-input {
    display: table-cell;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    font-size: inherit;
    color: inherit;
    background: none;
    border: 0;
    box-shadow: none;
}
.form-control {
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-fg-default);
    vertical-align: middle;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    outline: none;
    box-shadow: var(--color-primer-shadow-inset);
}
.form-control:focus {
    border-color: #0969da;
    outline: none;
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.3);
}
.header-search-wrapper {
    /* display: table; */
    width: 100%;
    max-width: 100%;
    padding: 0;
    font-size: inherit;
    font-weight: 400;
    color: #ffffff;
    vertical-align: middle;
    background-color: #24292f;
    border: 1px solid #57660a;
    box-shadow: none;
}
.header-search-wrapper:focus {
    box-shadow: none;
    background-color: rgba(255, 255, 255, 0.175);
}
.header-search-input {
    display: table-cell;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    font-size: inherit;
    color: inherit;
    background: none;
    border: 0;
    box-shadow: none;
}
.input-sm {
    min-height: 28px;
}
@media (min-width: 768px) {
    .header-search:focus-within {
        max-width: 544px;
    }
}
.jump-to-field-active:focus {
    color: #24292f !important;
    background-color: #f6f8fa;
}
.jump-to-field-active.jump-to-dropdown-visible:focus {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.header-search-input:focus ~ .header-search-key-slash {
    display: none !important;
}
.Box {
    background-color: #ffffff;
    border-color: #d0d7de;
    border-style: solid;
    border-width: 1px;
    border-radius: 6px;
}
.jump-to-suggestions {
    top: 100%;
    left: 0;
    z-index: 35;
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
    height: 260px;
    /* overflow-y: scroll; */
}
.jump-to-suggestions-results-container .navigation-item {
    border-bottom: 1px solid #d0d7de;
}
.jump-to-suggestions-path .jump-to-suggestion-name {
    max-width: none;
}
.css-truncate.css-truncate-target,
.css-truncate .css-truncate-target {
    display: inline-block;
    max-width: 125px;
    vertical-align: top;
}
.css-truncate.css-truncate-overflow,
.css-truncate .css-truncate-overflow,
.css-truncate.css-truncate-target,
.css-truncate .css-truncate-target {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.name-repo {
    color: #24292f;
    min-width: 0;
    min-height: 44px;
}
.jump-to-suggestions-path .jump-to-octicon {
    width: 28px;
    color: #57660a;
}
.dropdown-menu-sw {
    right: 0;
    left: auto;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: -136px;
    z-index: 100;
    width: 160px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-top: 2px;
    list-style: none;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
}
.dropdown-item {
    display: block;
    padding: 4px 8px 4px 16px;
    overflow: hidden;
    color: #24292f;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.header-nav-current-user {
    padding-bottom: 0;
    font-size: inherit;
}
.header-nav-current-user .css-truncate-target {
    max-width: 100%;
}
.header-nav-current-user .user-profile-link {
    color: #24292f;
}
.dropdown-divider {
    display: block;
    height: 0;
    margin: 8px 0;
    border-top: 1px solid #d0d7de;
}
.lh-condensed {
    line-height: 1.25 !important;
}
.user-status-container,
.user-status-container .team-mention,
.user-status-container .user-mention {
    white-space: normal;
}
.user-status-container {
    word-break: break-word;
    word-wrap: break-word;
}
.rounded-2 {
    border-radius: 6px !important;
}
.jump-to-suggestions-results-container
    [aria-selected='true']
    .jump-to-suggestions-path,
.jump-to-suggestions-results-container
    .navigation-focus
    .jump-to-suggestions-path:hover {
    color: #ffffff;
    background: #0969da;
}
.jump-to-suggestions-results-container [aria-selected='true'] .jump-to-octicon,
.jump-to-suggestions-results-container .navigation-focus .jump-to-octicon {
    color: #ffffff;
}
</style>
