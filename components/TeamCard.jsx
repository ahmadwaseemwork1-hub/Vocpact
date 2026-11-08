import Image from "next/image";

function initials(name) {
  const parts = name.split(" ").filter(Boolean);
  return (parts[0][0] + (parts.length > 1 ? parts[1][0] : "")).toUpperCase();
}

/** Leadership card: photo (or initials avatar when no photo yet), then role, name, bio. */
export default function TeamCard({ member, sizes }) {
  const { name, role, body, note, photo } = member;
  return (
    <article className="team-card">
      <div className="team-card__photo">
        {photo ? (
          <Image
            src={photo}
            alt={`${name}, ${role}`}
            fill
            sizes={sizes}
            unoptimized
          />
        ) : (
          <div className="team-card__avatar" aria-hidden="true">
            <span>{initials(name)}</span>
          </div>
        )}
      </div>
      <div className="team-card__body">
        <span className="team-card__role">{role}</span>
        <h3>{name}</h3>
        <p>{body}</p>
        {note ? <p className="team-card__note">{note}</p> : null}
      </div>
    </article>
  );
}
