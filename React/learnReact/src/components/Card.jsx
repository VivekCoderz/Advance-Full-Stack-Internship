import React from 'react'

function Card({ cards }) {
  return (
    <div style={{
      width: '400px',
      border: '2px solid #e0e0e0',
      borderRadius: '12px',
      padding: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      {/* Card Title */}
      <h2 style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
        {cards.cardTitle}
      </h2>

      {/* 2x2 Grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        {cards.products.map((product) => (
          <div key={product.id} style={{
            width: 'calc(50% - 4px)',
            boxSizing: 'border-box',
            border: '1px solid #f0f0f0',
            borderRadius: '8px',
            padding: '6px',
            cursor: 'pointer'
          }}>
            {/* Image Box */}
            <div style={{
              width: '100%',
              height: '120px',
              overflow: 'hidden',
              borderRadius: '6px',
              backgroundColor: '#f5f5f5'
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',   // ✅ fills box without stretching
                  display: 'block'
                }}
              />
            </div>

            {/* Product Info */}
            <div style={{ marginTop: '6px' }}>
              <p style={{
                fontSize: '13px',
                fontWeight: '600',
                margin: '0 0 4px 0',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'  // ✅ trims long names
              }}>
                {product.name}
              </p>
              <p style={{
                fontSize: '13px',
                color: '#e53935',
                fontWeight: 'bold',
                margin: 0
              }}>
                ₹{product.price}
              </p>

              {/* Badge */}
              {product.badge && (
                <span style={{
                  display: 'inline-block',
                  marginTop: '4px',
                  padding: '2px 6px',
                  fontSize: '10px',
                  borderRadius: '4px',
                  backgroundColor: '#fff3e0',
                  color: '#e65100',
                  fontWeight: '600'
                }}>
                  {product.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card