import React from 'react'

const Profile = props => {
  const profileObj = props.profileData
  return (
    <div>
      <div className="profileImg">
        <img
          role="presentation"
          className="img-circle center-block"
          src={profileObj.picture}
          width="200"
        />
      </div>
      <h1 className="text-center">{profileObj.name}</h1>
      <h2 className="text-center">{profileObj.label}</h2>
      <div className="divider" />
      <ul className="list-unstyled contact-links text-center">
        <li>
          <i className="fa fa-lg fa-location-arrow" />
          {`${profileObj.location.city}`}, {profileObj.location.countryCode} -{' '}
          {profileObj.location.postalCode}
        </li>
        <li>
          <i className="fa fa-lg fa-envelope" />
          <a href={`mailto:${profileObj.email}`}>{profileObj.email}</a>
        </li>
      </ul>
      <div className="divider" />
      <ul className="profileLinks list-inline text-center">
        <li>
          <a
            className="fa fa-linkedin fa-2x"
            style={{ color: '#0077B5' }}
            target="_blank"
            href={profileObj.profiles[0].url}
          />
        </li>
        <li>
          <a
            className="fa fa-github fa-2x"
            target="_blank"
            href={'https://github.com/' + profileObj.profiles[1].username}
          />
        </li>
        <li>
          <a
            className="fa fa-youtube-play fa-2x"
            style={{ color: 'red' }}
            target="_blank"
            href={profileObj.profiles[2].url}
          />
        </li>
        <li>
          <a
            className="fa fa-home fa-2x"
            target="_blank"
            href={profileObj.website}
          />
        </li>
      </ul>
    </div>
  )
}

export default Profile
