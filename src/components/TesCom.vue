<template>
    <div>
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
                            @focus="magic_flag = true"
                            @blur="magic_flag = false"
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
                            v-if="magic_flag === true"
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
                                        js-navigation-item js-jump-to-suggestion
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
                                                css-truncate css-truncate-target
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
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const route = useRouter()
        const dataRepos = ref([])
        const selectedRepo = ref(null)

        axios
            .get('https://api.github.com/users/dimaswntech/repos', {
                headers: {
                    Authorization:
                        'token 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',
                },
                owner: 'dimaswntech',
            })
            .then((response) => {
                dataRepos.value = response.data
            })
        const filteredRepo = computed(() => {
            const query = repoInput.value.toLowerCase()
            if (repoInput.value === '') {
                return dataRepos.value
            }
            if (repoInput.value === null) {
                for (const i = 0; i <= 5; i++) {
                    return dataRepos[i].value
                }
            }
            return dataRepos.value.filter((repo) => {
                return Object.values(repo).some((word) =>
                    String(word).toLowerCase().includes(query)
                )
            })
        })
        const selected = (data) => {
            router.push({ path: `/repo/${data}` })
        }
        console.log(selectedRepo)
        return {
            dataRepos,
            selected,
            selectedRepo,
            filteredRepo,
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
