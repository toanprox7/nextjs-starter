import React, { Component } from 'react'
import { i18n, Link, withNamespaces } from '../i18n'
class Test extends Component {
    render() {
        const { t } = this.props;
        return (
            <div>
                <button
                    type='button'
                    onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en')}
                >
                    {t('change-locale')}
                </button>
            </div>
        )
    }
}
export default withNamespaces('common')(Test)